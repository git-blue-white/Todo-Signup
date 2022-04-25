import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { LoadingContainer } from './components/common';
import Header from './containers/layout/Header';
import AuthActions, { AuthSelectors } from './redux/AuthRedux';
import storage from './libs/storage';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import TodoDetail from './pages/TodoDetail';

function App() {
  const [loaded, setLoaded] = useState(false);
  const username = useSelector(AuthSelectors.selectUsername);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageUser = storage.get('username');
    dispatch(AuthActions.setUsername(storageUser));
    setLoaded(true);
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <LoadingContainer loading={!loaded}>
        {() => (
          <>
            <Header />
            {username ?
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/details/:id" component={TodoDetail} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            :
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route render={() => <Redirect to="/login" />} />
              </Switch>}
          </>
        )}
      </LoadingContainer>
    </Box>
  );
}

export default App;
