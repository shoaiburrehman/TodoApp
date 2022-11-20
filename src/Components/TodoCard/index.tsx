import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';
import { colors } from '../../Utils/theme';
import MontHeavy from '../../Components/TextWrappers/MontHeavy';
import MontRegular from '../../Components/TextWrappers/MontRegular';
import MontExtraLight from '../../Components/TextWrappers/MontExtraLight';

interface Props {
    item: any,
    index: any,
    setTaskID: (id: any) => void,
    navigation: any,
    history: boolean | undefined
}  

const TodoCard = React.forwardRef((props: Props, ref: any) => {

    return(
        <Animatable.View animation="fadeInLeft" duration={1000} iterationDelay={200 * props.index}>
            <TouchableOpacity 
                // onLongPress={() => {setTaskID(item?.id); ref?.current?.show()}} 
                onPress={() => props?.navigation.navigate('Task Detail', {item: props.item})}
                style={styles.subContainer}
            >
                <View style={styles.flexRow}>
                    <View>
                        <MontHeavy numberOfLines={2} style={styles.title}>{props?.item.title}</MontHeavy>
                        <MontExtraLight style={styles.deadlineTxt}>Status: {props?.item.status}</MontExtraLight>
                    </View>
                    {props?.history === false &&
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.touchableEdit} onPress={() => props?.navigation?.navigate('Edit Task', {taskDetail: props?.item})}>
                                <Feather name="edit" color={colors.themeColor} size={18.5}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => {props?.setTaskID(props?.item?.id); ref?.current?.show()}} 
                                style={styles.imgEditPencil}
                            >
                                <Icon name="trash-outline" color={colors.themeColor} size={18.5}/>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={styles.descView}>
                    <MontRegular numberOfLines={5} style={styles.desc}>{props?.item.description}</MontRegular>
                </View>
                <View style={styles.deadlineView}>
                    <MontExtraLight style={styles.deadlineTxt}>Deadline: {props?.item?.deadline}</MontExtraLight>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    )
});

export default TodoCard;