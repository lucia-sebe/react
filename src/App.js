/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import Main from './pages/main.jsx';


function App(){
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>
        
      </Switch>
    </Router>
    </>
  )
}

export default  App;
