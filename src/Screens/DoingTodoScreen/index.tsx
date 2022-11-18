import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { showToast } from '../../Api/HelperFunction';
import { deleteTask, get, post } from '../../Api';
import AlertPopup from '../../Components/Popups/AlertPopup';
import TodoCard from '../../Components/TodoCard';
import MainStyle from '../../Utils/mainStyle';

const DoingTodoScreen = ({navigation}) => {
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

    const renderCard = ({item, index}) => {
        return(
            <TodoCard item={item} index={index} ref={alertPopupRef} setTaskID={setTaskID} />
        );
    }

    console.log('task: ', task)
    return (
        <View style={MainStyle.container}>
            <FlatList
                data={task}
                renderItem={renderCard}
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

export default DoingTodoScreen;