import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default (
  <>
    <Route path='/' exact component={Home}></Route>
    <Route path='/Login' exact component={Login}></Route>
  </>
);