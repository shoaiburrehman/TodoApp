import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { showToast, wait } from '../../Api/HelperFunction';
import AlertPopup from '../../Components/Popups/AlertPopup';
import TodoCard from '../../Components/TodoCard';
import MainStyle from '../../Utils/mainStyle';
import { useFocusEffect } from '@react-navigation/native';
import { useGetTodoHook } from '../../hooks/useGetTodoHook';
import { useDeleteTodoHook } from '../../hooks/useDeleteTodoHook';
import EmptyList from '../../Components/EmptyList';

const DoingTodoScreen = ({navigation}) => {
    const todoData = useSelector(state => state.todoReducer.todoList);
    const [task, setTask] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [taskID, setTaskID] = useState();
    
    const [todoState, todoFunc] = useGetTodoHook();
    const [deleteTodoState, deleteTodoFunc] = useDeleteTodoHook(); 
    const alertPopupRef = useRef()

    useFocusEffect(
        useCallback(() => {
            todoFunc();
        }, [navigation])
    );

    useEffect(() => {
        if(deleteTodoState){
            todoFunc();
        }
    }, [deleteTodoState])

    useEffect(() => {
        if(todoData){
            setTask(todoData?.filter((item) => item?.status === 'Doing'))
        }
    }, [todoData])

    const onRefresh = () => {
        setRefreshing(true);
        todoFunc();
        wait(1000).then(() => {
            setRefreshing(false);
        });
    }
    
    const renderCard = ({item, index}) => {
        return(
            <TodoCard 
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

    console.log('Doing task: ', task)
    return (
        <View style={MainStyle.container}>
            <FlatList
                data={task}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={renderEmptyList}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
            />
            <AlertPopup
                reference={alertPopupRef}
                title={'Delete Task'}
                subTitle={'Are You Sure You Want To Delete This Task?'}
                secondaryTitle={'No'}
                primaryTitle={'Yes'}
                onAccept={() => deleteTodoFunc(taskID)}
            />
        </View>
    );
}

export default DoingTodoScreen;