import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { deleteTodo } from '../../redux/actions/todoActions';

export const useDeleteTodoHook = () => {
  const dispatch = useDispatch();
  const [deleteTodoState, setDeleteTodo] = useState(null);

  const deleteTodoFunc = useCallback((id, undoTask) => {
    try {
      dispatch(deleteTodo(id, undoTask)).then(res => {
        showToast('Task Removed Successfully!')
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
