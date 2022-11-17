import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import { Styles } from './style';
import { colors } from '../../Utils/theme';
import { showToast } from '../../Api/HelperFunction';
import { deleteTask, get, post } from '../../Api';
import MontHeavy from '../../Components/TextWrappers/MontHeavy';
import MontRegular from '../../Components/TextWrappers/MontRegular';
import MontExtraLight from '../../Components/TextWrappers/MontExtraLight';
import AlertPopup from '../../Components/Popups/AlertPopup';

const TodoScreen = ({navigation}) => {
    const [task, setTask] = useState();
    const [taskID, setTaskID] = useState();
    const alertPopupRef = useRef()

    useEffect(() => {  
        getTodo()
    }, []);
  
    const getTodo = async() => {
        try {
            const response = await get();
            setTask(response)
        } catch (error) {
            showToast(error)
        }
    }

    const deleteTodo = async(id) => {
        console.log('id: ', id)
        try {
            const response = await deleteTask(id);
            console.log('response: ', response)
            // setTask(response)
        } catch (error) {
            showToast(error)
        }
    }

    const createTodo = async() => {
        let data = {
            createdAt: 1667103624, 
            deadline: "deadline 3", 
            description: "description 3", 
            id: "3", 
            status: "status 3", 
            title: "title 3"
        }
        try {
            const response = await post(data);
            console.log('response: ', response)
        } catch (error) {
            showToast(error)
        }
    }

    console.log('task: ', task)
    return (
        <View style={Styles.container}>
            <FlatList
                data={task}
                renderItem={({ item, index }) => {
                    return(
                        <Animatable.View animation="fadeInLeft" duration={1000} iterationDelay={200 * index}>
                            <TouchableOpacity 
                                onLongPress={() => {setTaskID(item?.id); alertPopupRef?.current?.show()}} 
                                style={Styles.subContainer}
                            >
                                <View style={Styles.row}>
                                    <View>
                                        <MontHeavy numberOfLines={2} style={Styles.title}>{item.title}</MontHeavy>
                                        <Text>Status: {item.status}</Text>
                                        <View style={Styles.descView}>
                                            <MontRegular numberOfLines={5} style={Styles.desc}>{item.description}</MontRegular>
                                        </View>
                                    </View>
                                    <TouchableOpacity 
                                        onPress={() => {setTaskID(item?.id); alertPopupRef?.current?.show()}} 
                                        style={Styles.imgEditPencil}
                                    >
                                        <Icon name="trash-outline" color={colors.themeColor} size={18.5}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={Styles.deadlineView}>
                                    <MontExtraLight style={Styles.deadlineTxt}>Deadline: {item?.deadline}</MontExtraLight>
                                </View>
                            </TouchableOpacity>
                    </Animatable.View>
                    )  
                }}
                showsVerticalScrollIndicator={false}
            />
            <AlertPopup
                reference={alertPopupRef}
                title={'Delete Task'}
                subTitle={'Are You Sure You Want To Delete This Task?'}
                secondaryTitle={'No'}
                primaryTitle={'Yes'}
                onAccept={() => deleteTodo(taskID)}
            />
        </View>
    );
}

export default TodoScreen;