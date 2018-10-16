import React, { Component } from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import SearchBar from './Components/search';

import Drinks from './pages/Drinks';
import Detail from './pages/Detail'




class App extends Component {




  render() {
    return (
      <Router>
        <div className="App container">
          <div>
          {/* <SearchBar /> */}
          <br></br>
          <Route exact path="/" component={Drinks} />
          <Route exact path="/detail/:id" component={Detail} />
          </div>
            
        </div>
      </Router>
    );
  }
}

export default App;
