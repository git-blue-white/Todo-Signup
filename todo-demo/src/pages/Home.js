import React from 'react';
import MainLayout from '../containers/layout/MainLayout';
import TodoList from '../containers/todos/TodoList';

function Home() {
  return (
    <MainLayout title="Todos">
      <TodoList />
    </MainLayout>
  );
}

export default Home;
