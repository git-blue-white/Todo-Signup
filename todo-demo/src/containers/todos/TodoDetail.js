import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function TodoDetail({ todo }) {
  return (
    <Box component={Paper} p={3}>
      <Typography>ID: {todo.id}</Typography>
      <Typography>User ID: {todo.userId}</Typography>
      <Typography>Title: {todo.title}</Typography>
      <Typography className={cx({ completed: todo.completed })}>
        Completed: {todo.completed ? 'Yes' : 'No'}
      </Typography>
    </Box>
  );
}

TodoDetail.propTypes = {
  todo: PropTypes.object
}

export default TodoDetail;
