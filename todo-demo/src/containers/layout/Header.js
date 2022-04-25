import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AuthActions, { AuthSelectors } from '../../redux/AuthRedux';

function Header({ history }) {
  const username = useSelector(AuthSelectors.selectUsername);
  const dispatch = useDispatch() ;
  const logout = () => {
    dispatch(AuthActions.logout());
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flex={1}>
          <Typography variant="h6">Todo Demo</Typography>
        </Box>
        {username ? (
          <Box>
            <p><b>Hi</b> {username}</p>
            <Button color="inherit" onClick={() => history.push('/')}>
              Todos
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Box>
            <Button color="inherit" onClick={() => history.push('/signup')}>
              Sign Up
            </Button>
            <Button color="inherit" onClick={() => history.push('/login')}>
              Log In
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  history: PropTypes.object
};

export default withRouter(Header);
