import { post, get, deleteTask, put } from '../../Api';
import { wait } from '../../Api/HelperFunction';
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

export const createTodo = (data: object) => {
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

export const deleteTodo = (id: string, undoTask: any) => {
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
          });
          if(undoTask){
            dispatch({
              type: actionsTypes.undoTask,
              payload: {
                undoHistory: undoTask,
              },  
            });
          }
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

export const editTodo = (data: object, id: string) => {
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

export const clearTaskHistory = () => {
  return async dispatch => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        dispatch({
          type: actionsTypes.loaderOn,
        });
        try {
          dispatch({
            type: actionsTypes.clearHistory,
          });
        } catch (error) {
          reject(error);
        } finally {
          wait(500).then(() => {
            dispatch({
              type: actionsTypes.loaderOff,
            });
          });
        }
      }, 300);
    });
  };
};
