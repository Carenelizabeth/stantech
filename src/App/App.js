import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeWrapper from '../Home/home-wrapper';
import TopNav from '../TopNav/top-nav';
import SideNav from '../SideNav/side-nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideNav></SideNav>
          <TopNav></TopNav>
          <main>
            <Switch>
              <Route exact path='/' component={HomeWrapper} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
