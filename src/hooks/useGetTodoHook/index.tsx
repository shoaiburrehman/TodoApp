import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { todoList } from '../../redux/actions/todoActions';

export const useGetTodoHook = () => {
  const dispatch = useDispatch();
  const [todoState, setTodoState] = useState(null);

  const todoFunc = useCallback(() => {
    try {
      dispatch(todoList()).then(res => {
        setTodoState(res);
      }).catch((e) => {
        showToast(e);
      });

    } catch (error) {
      showToast(error);
    }
  }, []);

  return [todoState, todoFunc];
};
