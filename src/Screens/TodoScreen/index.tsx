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
import { styles } from './styles';
import GradientButton from '../../Components/GradientButton';
import MainButton from '../../Components/MainButton';
import { colors } from '../../Utils/theme';

interface Props {
    navigation: any,
    route: any
}
  
const TodoScreen = ({navigation}: Props) => {
    const todoData = useSelector((state: any) => state.todoReducer.todoList);
    const [task, setTask] = useState<any>();
    const [refreshing, setRefreshing] = useState(false);
    const [taskID, setTaskID] = useState();
    const [undoActive, setUndoActive] = useState(false);
    
    const [todoState, todoFunc] = useGetTodoHook();
    const [deleteTodoState, deleteTodoFunc] = useDeleteTodoHook(); 
    const alertPopupRef = useRef<any>()

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
            setTask(todoData?.filter((item: any) => item?.status === 'todo'))
        }
    }, [todoData])

    useEffect(() => {
        if(task && task?.length > 0){
            setUndoActive(true);
        } else {
            setUndoActive(false);
        }
    }, [task])

    const onRefresh = () => {
        setRefreshing(true);
        todoFunc();
        wait(1000).then(() => {
            setRefreshing(false);
        });
    }

    const handleUndo = () => {
        console.log('Last Task: ', task[task.length - 1])
        deleteTodoFunc(task[task.length - 1]?.id, task[task.length - 1])
    }

    const renderCard = ({item, index}: any) => {
        return(
            <TodoCard 
                history={false}
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
        return(
            <View style={styles.buttonsRow}>
                <GradientButton
                    text={"View History"}
                    style={styles.button}
                    textStyle={{color: colors.white}}
                    onPress={() => navigation?.navigate('Task History')}
                />
                <MainButton 
                    active={undoActive}
                    text={"Undo Task"}
                    style={undoActive  ? styles.leftButton : styles.inActiveLeftBtn}
                    textStyle={{color: undoActive ? colors.black : colors.white}}
                    onPress={handleUndo}
                />
            </View>
        )
    }

    console.log('undoActive: ', undoActive)
    return (
        <View style={MainStyle.container}>
            <FlatList
                data={task}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListHeaderComponent={renderHeader}
                ListEmptyComponent={renderEmptyList}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
            />
            <AlertPopup
                reference={alertPopupRef}
                subTitle={'Are You Sure You Want To Delete This Task?'}
                secondaryTitle={'No'}
                primaryTitle={'Yes'}
                onAccept={() => deleteTodoFunc(taskID)}
            />
        </View>
    );
}

export default TodoScreen;