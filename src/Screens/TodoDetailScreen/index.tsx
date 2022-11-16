import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import { vh, vw } from '../../Utils/units';
import { Styles } from './style';
import { colors } from '../../Utils/theme';

const TodoDetailScreen = ({navigation}) => {

    const [task, setTask] = useState()

    useEffect(() => {
      console.warn("useEffectUPDATEDDDDDDDDDDDDD")
    }, []);
  
    return (
      <>
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={Styles.container}>
        <View style={[Styles.pendingContainer]}>
          <FlatList
            data={task}
            renderItem={({ item }) => (
              item.taskProgress.map((task, index) => {
                if(task.isCompleted){
                  return(
                    <Animatable.View animation="fadeInLeft" duration={1000} iterationDelay={200 * index}>
                    <TouchableOpacity 
                        // onLongPress={() => { onDeletePress(task.taskId, item.id) }} 
                        style={Styles.subContainer}
                    >
                      <View style={Styles.row}>
                        <View>
                          <Text style={Styles.title}>{task.taskTitle}</Text>
                          <Text>{`Assigned To: ${item.username} | ${task.dueDate}`}</Text>
                          <View style={{flexDirection: 'row', marginTop: vh}}>
                            <View style={{width: vw * 85, justifyContent: 'center' }}>
                              <Text numberOfLines={2} style={Styles.desc}>{task.taskDescription}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={[Styles.ViewSide, {width: vw * 30, height: vh * 4.5, alignItems: 'flex-end'}]}>
                            <Text style={Styles.isCompleted}>{"Completed"}</Text>
                            <Text numberOfLines={1} style={[Styles.isCompleted, {color: colors.lightTextColor}]}>{task.taskId}</Text>
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
                }
              })
            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
      {/* <View style={Styles.footer}>
      <View style={Styles.addContainer}>
        <View style={Styles.btnGradientCircle}>
            <GradientButton style={Styles.btn1} textStyle={[MainStyle.btnText, {fontSize: moderateScale(25), fontWeight: FONTS.fonWeight5, marginVertical: verticalScale(9)}]} text="+" onPress={() => navigation.navigate('CreateTasks', {tasks: task})} />
        </View>            
      </View>
    </View> */}
    </>    
    );
}

export default TodoDetailScreen;