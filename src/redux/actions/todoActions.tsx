import { post, get, deleteTask, put } from '../../Api';
import actionsTypes from '../types';

export const todoList = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        dispatch({
          type: actionsTypes.loaderOn,
        });
        try {
          const response = await get();
          dispatch({
            type: actionsTypes.todoList,
            payload: {
              todoList: response,
            },
          });
          resolve(response);
        } catch (error) {
          reject(error);
        } finally {
          dispatch({
            type: actionsTypes.loaderOff,
          });
        }
      }, 300);
    });
  };
};

export const createTodo = (data) => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        dispatch({
          type: actionsTypes.loaderOn,
        });
        try {
          const response = await post(data);
          dispatch({
            type: actionsTypes.createTodo,
            // payload: {
            //   todoList: response,
            // },
          });
          resolve(response);
        } catch (error) {
          reject(error);
        } finally {
          dispatch({
            type: actionsTypes.loaderOff,
          });
        }
      }, 300);
    });
  };
};

export const deleteTodo = (id) => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        dispatch({
          type: actionsTypes.loaderOn,
        });
        try {
          const response = await deleteTask(id);
          dispatch({
            type: actionsTypes.deleteTodo,
            // payload: {
            //   todoList: response,
            // },
          });
          resolve(response);
        } catch (error) {
          reject(error);
        } finally {
          dispatch({
            type: actionsTypes.loaderOff,
          });
        }
      }, 300);
    });
  };
};

export const editTodo = (data, id) => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        dispatch({
          type: actionsTypes.loaderOn,
        });
        try {
          const response = await put(data, false, id);
          dispatch({
            type: actionsTypes.editTodo,
            // payload: {
            //   todoList: response,
            // },
          });
          resolve(response);
        } catch (error) {
          reject(error);
        } finally {
          dispatch({
            type: actionsTypes.loaderOff,
          });
        }
      }, 300);
    });
  };
};
