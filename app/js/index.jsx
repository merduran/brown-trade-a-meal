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
import ExpandedOffer from './components/ExpandedOffer.jsx'
import Profile from './components/Profile.jsx'
import EditProfile from './components/EditProfile.jsx'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/market" component={Market} />
      <Route path="/profile" component={Profile} />
      <Route path="/edit_profile" component={EditProfile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
