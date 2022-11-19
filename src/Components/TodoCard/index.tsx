import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';
import { colors } from '../../Utils/theme';
import { showToast } from '../../Api/HelperFunction';
import { deleteTask, get, post } from '../../Api';
import MontHeavy from '../../Components/TextWrappers/MontHeavy';
import MontRegular from '../../Components/TextWrappers/MontRegular';
import MontExtraLight from '../../Components/TextWrappers/MontExtraLight';
import AlertPopup from '../../Components/Popups/AlertPopup';

const TodoCard = React.forwardRef(({item, index, setTaskID, navigation}, ref) => {

    return(
        <Animatable.View animation="fadeInLeft" duration={1000} iterationDelay={200 * index}>
            <TouchableOpacity 
                // onLongPress={() => {setTaskID(item?.id); ref?.current?.show()}} 
                onPress={() => navigation.navigate('Task Detail', {item: item})}
                style={styles.subContainer}
            >
                <View style={styles.row}>
                    <View>
                        <MontHeavy numberOfLines={2} style={styles.title}>{item.title}</MontHeavy>
                        <MontExtraLight style={styles.deadlineTxt}>Status: {item.status}</MontExtraLight>
                        <View style={styles.descView}>
                            <MontRegular numberOfLines={5} style={styles.desc}>{item.description}</MontRegular>
                        </View>
                    </View>
                    <TouchableOpacity 
                        onPress={() => {setTaskID(item?.id); ref?.current?.show()}} 
                        style={styles.imgEditPencil}
                    >
                        <Icon name="trash-outline" color={colors.themeColor} size={18.5}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.deadlineView}>
                    <MontExtraLight style={styles.deadlineTxt}>Deadline: {item?.deadline}</MontExtraLight>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    )
});

export default TodoCard;