import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { showToast } from '../../Api/HelperFunction';
import { editTodo } from '../../redux/actions/todoActions';

export const useEditTodoHook = () => {
  const dispatch = useDispatch();
  const [editTodoState, setEditTodoState] = useState(null);

  const editTodoFunc = useCallback((data, id) => {
    try {
      dispatch(editTodo(data, id)).then(res => {
        setEditTodoState(res);
      }).catch((e) => {
        showToast(e);
      });

    } catch (error) {
      showToast(error);
    }
  }, []);

  return [editTodoState, editTodoFunc];
};
