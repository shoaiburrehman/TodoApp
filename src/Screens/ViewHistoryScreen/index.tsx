import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AlertPopup from '../../Components/Popups/AlertPopup';
import TodoCard from '../../Components/TodoCard';
import MainStyle from '../../Utils/mainStyle';
import { useFocusEffect } from '@react-navigation/native';
import EmptyList from '../../Components/EmptyList';
import { styles } from './styles';
import MainButton from '../../Components/MainButton';
import { colors } from '../../Utils/theme';
import { clearTaskHistory } from '../../redux/actions/todoActions';

const ViewHistoryScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const todoData = useSelector(state => state.todoReducer.undoHistory);
    const [task, setTask] = useState();
    const [taskID, setTaskID] = useState();
    const alertPopupRef = useRef();
    const alertPopupRef2 = useRef();

    // useFocusEffect(
    //     useCallback(() => {
    //         todoFunc();
    //     }, [navigation])
    // );

    // useEffect(() => {
    //     if(deleteTodoState){
    //         todoFunc();
    //     }
    // }, [deleteTodoState])

    useFocusEffect(
        useCallback(() => {
            if(todoData){
                setTask(todoData?.filter((item) => item?.status === 'todo'))
            }
        }, [navigation, todoData])
    );


    const clearHistory = () => {
        dispatch(clearTaskHistory());
    }

    const renderCard = ({item, index}) => {
        return(
            <TodoCard 
                history
                item={item} 
                index={index} 
                ref={alertPopupRef} 
                setTaskID={setTaskID} 
                navigation={navigation} 
            />
        );
    }

    const renderEmptyList = () => {
        return(
            <EmptyList />
        )
    }

    const renderHeader = () => {
        if(task && task?.length > 0){
            return(
                <View style={styles.buttonsRow}>
                    <MainButton 
                        text={"Clear History"}
                        style={styles.leftButton}
                        textStyle={{color: colors.white}}
                        onPress={() => alertPopupRef2?.current?.show()}
                    />
                </View>
            )    
        } else {
            return;
        }
    }

    return (
        <View style={MainStyle.container}>
            <FlatList
                data={task}
                ListHeaderComponent={renderHeader}
                ListEmptyComponent={renderEmptyList}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
            />
            <AlertPopup
                reference={alertPopupRef2}
                title={'Clear History'}
                subTitle={'Are You Sure You Want To Clear Task History?'}
                secondaryTitle={'No'}
                primaryTitle={'Yes'}
                onAccept={clearHistory}
            />

        </View>
    );
}

export default ViewHistoryScreen;