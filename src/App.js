/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Login from './pages/login';
import EditProfile from './pages/editProfile';
import Home from './pages/home';
import Main from './pages/main.jsx';
import TrailerMovie from './pages/trailerMovie';

function App(){
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main/>
        </Route>

        {/* <Route path="/login">
          <Login/>
        </Route> */}

        <Route path="/editProfile">
          <EditProfile/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>
        
        <Route path="/trailerMovie/:id">
          <TrailerMovie/>
        </Route>

      </Switch>
    </Router>
    </>
  )
}

export default  App;
