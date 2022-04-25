import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainLayout from '../containers/layout/MainLayout';
import TodoDetail from '../containers/todos/TodoDetail';
import { LoadingContainer } from '../components/common';
import TodoActions, { TodoSelectors } from '../redux/TodoRedux';

function TodoDetailPage({ match }) {
  const { id } = match.params;
  const loading = useSelector(TodoSelectors.selectLoading);
  const todo = useSelector(TodoSelectors.selectTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = () => {
      return dispatch(TodoActions.loadTodo(id));
    };

    loadTodos();
  }, [dispatch, id]);

  return (
    <MainLayout title={todo ? todo.title : ''}>
      <LoadingContainer loading={loading || !todo}>
        <TodoDetail todo={todo} />
      </LoadingContainer>
    </MainLayout>
  );
}

export default withRouter(TodoDetailPage);
