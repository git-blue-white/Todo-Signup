import { createReducer, createActions } from 'reduxsauce';
import todoApiCreate from '../services/todoApi';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setTodoList: ['list'],
  setTodoListLoading: ['loading']
});

export const TodoListTypes = Types;

Creators.loadTodoList = () => {
  return async dispatch => {
    const api = todoApiCreate();
    dispatch(Creators.setTodoListLoading(true));
    const resp = await api.list();

    if (resp.ok) {
      dispatch(Creators.setTodoList(resp.data));
      dispatch(Creators.setTodoListLoading(false));
      return resp.data;
    } else {
      dispatch(Creators.setTodoListLoading(false));
      throw new Error('There was problem loading data');
    }
  };
};

export default Creators;

/* --------------------- Selectors ---------------- */
export const TodoListSelectors = {
  selectLoading: state => state.todoList.loading,
  selectTodoList: state => state.todoList.list
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
  list: []
};

/* ------------------- Reducers --------------------- */
export const setTodoList = (state, { list }) => ({
  ...state,
  list
});

export const setTodoListLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TODO_LIST_LOADING]: setTodoListLoading,
  [Types.SET_TODO_LIST]: setTodoList
});
