import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import css from '../css/main.css';
import Home from './components/Home.jsx';
import Market from './components/Market.jsx'
import Login from './components/Login.jsx'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Home} />
      <Route path="/market" component={Market} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
