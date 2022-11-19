import { REHYDRATE } from "redux-persist/es/constants";
import actionTypes from "../types";

const initialState = {
    loading: false,
    todoList: [],
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