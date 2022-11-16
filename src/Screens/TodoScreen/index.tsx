import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import { vh, vw } from '../../Utils/units';
import { Styles } from './style';
import { colors } from '../../Utils/theme';
import { showToast } from '../../Api/HelperFunction';
import { base_url } from '../../Api/configs';
import { get } from '../../Api';
import MontBold from '../../Components/TextWrappers/MontBold';
import MontBook from '../../Components/TextWrappers/MontBook';
import MontSemiBold from '../../Components/TextWrappers/MontSemiBold';
import MontHeavy from '../../Components/TextWrappers/MontHeavy';
import MontRegular from '../../Components/TextWrappers/MontRegular';

const TodoScreen = ({navigation}) => {

    const [task, setTask] = useState()

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

    console.log('task: ', task)
    return (
        <View style={Styles.container}>
            <FlatList
                data={task}
                renderItem={({ item, index }) => {
                    return(
                        <Animatable.View animation="fadeInLeft" duration={1000} iterationDelay={200 * index}>
                            <TouchableOpacity 
                                // onLongPress={() => { onDeletePress(task.taskId, item.id) }} 
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
                                        // onPress={() => { onDeletePress(task.taskId, item.id) }} 
                                        style={Styles.imgEditPencil}
                                    >
                                        <Icon name="trash-outline" color={colors.themeColor} size={18.5}/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                    </Animatable.View>
                    )  
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default TodoScreen;