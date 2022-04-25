import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import App from './App';
import configureStore from './redux/store';
import history from './libs/history';
import theme from './styles/theme';
import './index.css';


const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseLine />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Router>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
