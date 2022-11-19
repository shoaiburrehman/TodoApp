import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { deleteTodo } from '../../redux/actions/todoActions';

export const useDeleteTodoHook = () => {
  const dispatch = useDispatch();
  const [deleteTodoState, setDeleteTodo] = useState(null);

  const deleteTodoFunc = useCallback((id) => {
    try {
      dispatch(deleteTodo(id)).then(res => {
        setDeleteTodo(res);
      }).catch((e) => {
        showToast(e);
      });

    } catch (error) {
      showToast(error);
    }
  }, []);

  return [deleteTodoState, deleteTodoFunc];
};
