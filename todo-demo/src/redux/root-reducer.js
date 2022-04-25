import { combineReducers } from 'redux';
import { reducer as auth } from './AuthRedux';
import { reducer as todoList } from './TodoListRedux';
import { reducer as todo } from './TodoRedux';

const reducers = combineReducers({
  auth,
  todoList,
  todo
});

export default reducers;
