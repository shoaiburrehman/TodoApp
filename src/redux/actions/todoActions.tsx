import { post, get } from '../../Api';
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
              // user: response.user,
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
