import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import MainStyle from '../../Utils/mainStyle';
import { styles } from './styles';
import MontBold from '../../Components/TextWrappers/MontBold';
import { colors } from '../../Utils/theme';
import MontExtraLight from '../../Components/TextWrappers/MontExtraLight';
import GradientButton from '../../Components/GradientButton';
import MontSemiBold from '../../Components/TextWrappers/MontSemiBold';
import ChangeStatusPopup from '../../Components/Popups/ChangeStatusPopup';

const TodoDetailScreen = ({navigation, route}) => {
    const taskDetail = route?.params?.item;
    const alertPopupRef = useRef();
    const [status, setStatus] = useState('')


    console.log('status: ', status)
    return (
        <View style={MainStyle.container}>
            <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.flexRow}>
                    <MontBold style={styles.title}>{taskDetail?.title}</MontBold>
                    <TouchableOpacity style={styles.touchableEdit} onPress={() => navigation?.navigate('Edit Task', {taskDetail: taskDetail})}>
                        <Icon name="edit" color={colors.themeColor} size={18.5}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.innerContainer}>
                    <MontSemiBold style={[styles.titleText]}>Deadline</MontSemiBold>
                    <MontExtraLight style={styles.infoText}>{taskDetail?.deadline}</MontExtraLight>
                </View>
                <View style={styles.innerContainer}>
                    <MontSemiBold style={[styles.titleText]}>Status</MontSemiBold>
                    <MontExtraLight style={styles.infoText}>{status ? status : taskDetail?.status}</MontExtraLight>
                </View>
                <View style={styles.innerContainer}>
                    <MontSemiBold style={[styles.titleText]}>Description</MontSemiBold>
                    <MontExtraLight style={styles.infoText}>{taskDetail?.description}</MontExtraLight>
                </View>
                <GradientButton
                    text={"Change Status"}
                    style={[styles.btn]} 
                    textStyle={styles.btnText}
                    onPress={() => alertPopupRef?.current?.show()}
                />
            </ScrollView>
            <ChangeStatusPopup ref={alertPopupRef} setStatus={setStatus} />
        </View>
    );
}

export default TodoDetailScreen;