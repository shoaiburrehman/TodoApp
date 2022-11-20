import moment from "moment";
import { REHYDRATE } from "redux-persist/es/constants";
import actionTypes from "../types";

const initialState = {
    loading: false,
    todoList: [],
    undoHistory: [],
};

export default todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            return state;
        case actionTypes.todoList: {
            return {
                ...state,
                todoList: action.payload.todoList
            }
        }
        case actionTypes.undoTask: {
            let task = action.payload.undoHistory;
            task = {
                ...task,
                id: `Task#${(moment())}`,
            }
            console.log('undoTask: ', task);
            let historyList = (state?.undoHistory && state?.undoHistory?.length > 0) ? [...state?.undoHistory] : [];
            console.log('historyList: ', historyList)
            historyList.push(task)
            console.log('historyList 1: ', historyList)    
            return{
                ...state,
                undoHistory: historyList
            }
        }
        case actionTypes.clearHistory: {
            console.log('clearHistory')
            return{
                ...state,
                undoHistory: []
            }
        }
        case actionTypes.loaderOn: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.loaderOff: {
            return {
                ...state,
                loading: false
            }
        }
        default: {
            return state
        }
    }
}