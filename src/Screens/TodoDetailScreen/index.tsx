import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import MainStyle from '../../Utils/mainStyle';
import { styles } from './styles';
import MontBold from '../../Components/TextWrappers/MontBold';
import { colors } from '../../Utils/theme';
import MontExtraLight from '../../Components/TextWrappers/MontExtraLight';
import GradientButton from '../../Components/GradientButton';
import MontSemiBold from '../../Components/TextWrappers/MontSemiBold';
import ChangeStatusPopup from '../../Components/Popups/ChangeStatusPopup';
import { useEditTodoHook } from '../../hooks/useEditTodoHook';
import { showToast } from '../../Api/HelperFunction';
import { isBlank } from '../../Utils/helper';

interface Props {
    navigation: any,
    route: any
}
  
const TodoDetailScreen = ({navigation, route}: Props) => {
    const taskDetail = route?.params?.item;
    const alertPopupRef = useRef<any>();
    const [status, setStatus] = useState('')
    const [editTodoState, editTodoFunc] = useEditTodoHook();

    useEffect(() => {
        if(!isBlank(status)){
            handleStatusChange()
        }
    }, [status])

    useEffect(() => {
        if(editTodoState){
            setStatus('');
            navigation?.goBack();
        }
    }, [editTodoState])

    const handleStatusChange = () => {
        if(isBlank(status)){
            showToast('Please add task status');
        } else {
            let data = {
                createdAt: taskDetail?.createdAt, 
                deadline: taskDetail?.deadline, 
                description: taskDetail?.description, 
                id: taskDetail?.id, 
                status: status, 
                title: taskDetail?.title
            }
            console.log('editTodo: ', data)
            editTodoFunc(data, taskDetail?.id);
        }
    }

    console.log('status: ', status)
    return (
        <View style={MainStyle.container}>
            <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.flexRow}>
                    <MontBold style={styles.title}>{taskDetail?.title}</MontBold>
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