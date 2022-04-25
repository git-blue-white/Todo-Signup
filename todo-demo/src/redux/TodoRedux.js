import { createReducer, createActions } from 'reduxsauce';
import todoApiCreate from '../services/todoApi';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setTodo: ['todo'],
  setTodoLoading: ['loading']
});

export const TodoTypes = Types;

Creators.loadTodo = id => {
  return async dispatch => {
    const api = todoApiCreate();
    dispatch(Creators.setTodoLoading(true));
    const resp = await api.get(id);

    if (resp.ok) {
      dispatch(Creators.setTodo(resp.data));
      dispatch(Creators.setTodoLoading(false));
      return resp.data;
    } else {
      dispatch(Creators.setTodoLoading(false));
      throw new Error('There was problem loading data');
    }
  };
};

export default Creators;

/* --------------------- Selectors ---------------- */
export const TodoSelectors = {
  selectLoading: state => state.todo.loading,
  selectTodo: state => state.todo.todo
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  loading: false,
  todo: null
};

/* ------------------- Reducers --------------------- */
export const setTodo = (state, { todo }) => ({
  ...state,
  todo
});

export const setTodoLoading = (state, { loading }) => ({
  ...state,
  loading
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TODO_LOADING]: setTodoLoading,
  [Types.SET_TODO]: setTodo
});
