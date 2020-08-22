import React , { Component } from 'react';
import './App.css';
import StuDashboard from "./Student/StudentDashboard.js"
import MasDashboard from "./Master/MasterDashboard.js"
import AbsensePanel from "./Master/Master Components/MasClasses.js"
import SignIn from "./Registration/LoginPage"
import StudentDetails from './Master/Master Components/StudentDetails';

import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/MasDashboard" component={MasDashboard} />
            <Route exact path="/StuDashboard" component={StuDashboard} />
            <Route exact path="/MasClasses" component={AbsensePanel} />
            <Route exact path="/StudentDetails" component={StudentDetails} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
