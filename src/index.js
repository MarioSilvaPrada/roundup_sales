import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Ebooks from 'components/Ebooks/Ebooks';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/ebooks' component={Ebooks} />
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
