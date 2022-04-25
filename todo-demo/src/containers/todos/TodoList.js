import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { LoadingContainer } from '../../components/common';
import TodoListActions, { TodoListSelectors } from '../../redux/TodoListRedux';

function TodoList() {
  const loading = useSelector(TodoListSelectors.selectLoading);
  const todos = useSelector(TodoListSelectors.selectTodoList);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodos = () => {
      dispatch(TodoListActions.loadTodoList());
    };

    loadTodos();
  }, [dispatch]);

  return (
    <LoadingContainer loading={loading}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">#</TableCell>
              <TableCell component="th">User ID</TableCell>
              <TableCell component="th">Title</TableCell>
              <TableCell component="th">Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.length === 0 && (
              <TableRow>
                <TableCell colSpan={2}>No Todos</TableCell>
              </TableRow>
            )}
            {todos.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>
                  <Link to={`/details/${row.id}`}>{row.title}</Link>
                </TableCell>
                <TableCell>{row.completed ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </LoadingContainer>
  );
}

export default TodoList;
