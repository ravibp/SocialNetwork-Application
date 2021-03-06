import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () =>
  (
    <Router>
      <Fragment className="App">
        Hello World
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

          </section>
        </Switch>
      </Fragment>
    </Router >
  );


export default App;
