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
                                    <Text style={Styles.title}>{item.title}</Text>
                                    <View style={{flexDirection: 'row', marginTop: vh}}>
                                        <View style={{width: vw * 85, justifyContent: 'center' }}>
                                            <Text numberOfLines={2} style={Styles.desc}>{item.description}</Text>
                                        </View>
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