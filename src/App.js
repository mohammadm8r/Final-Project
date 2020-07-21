import React , { Component } from 'react';
import './App.css';
import StuDashboard from "./Student/StudentDashboard.js"
import MasDashboard from "./Master/MasterDashboard.js"
import AbsensePanel from "./Master/Master Components/MasClasses.js"
import SignIn from "./Registration/LoginPage"

import {
   BrowserRouter as Router,
   Route,
   Switch
  } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <MenuAppBar />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
          </Switch>
        </div>
      </Router>
    
    )
  }
}

export default App;
