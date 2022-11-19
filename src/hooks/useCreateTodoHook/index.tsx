import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { createTodo } from '../../redux/actions/todoActions';

export const useCreateTodoHook = () => {
  const dispatch = useDispatch();
  const [createTodoState, setCreateTodoState] = useState(null);

  const createTodoFunc = useCallback((data) => {
    try {
      dispatch(createTodo(data)).then(res => {
        setCreateTodoState(res);
      }).catch((e) => {
        showToast(e);
      });

    } catch (error) {
      showToast(error);
    }
  }, []);

  return [createTodoState, createTodoFunc];
};
