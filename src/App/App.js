import React, { Component } from 'react';
import './App.css';
import Main from '../MainContent/main';
import TopNav from '../TopNav/top-nav';
import SideNav from '../SideNav/side-nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav></SideNav>
        <main>
          <TopNav></TopNav>
          <Main></Main>
        </main>
      </div>
    );
  }
}

export default App;
