import React , { Component } from 'react';
import './App.css';
import StuDashboard from "./Student/StudentDashboard.js"
import MasDashboard from "./Master/MasterDashboard.js"
import classes from "./Master/Master Components/MasClasses.js"
import SignIn from "./Registration/LoginPage"

import { BrowserRouter as Router, Route } from "react-router-dom";

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
        <div className="App">
          <Route exact path="/" component={SignIn} />
        </div>
      </Router>
    )
  }
}

export default App;
