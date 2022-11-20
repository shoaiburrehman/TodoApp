import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { createTodo } from '../../redux/actions/todoActions';

export const useCreateTodoHook = () => {
  const dispatch = useDispatch();
  const [createTodoState, setCreateTodoState] = useState(null);

  const createTodoFunc = useCallback((data: object) => {
    try {
      dispatch(createTodo(data)).then((res: object) => {
        setCreateTodoState(res);
      }).catch((e: any) => {
        showToast(e);
      });

    } catch (error: any) {
      showToast(error);
    }
  }, []);

  return [createTodoState, createTodoFunc];
};
