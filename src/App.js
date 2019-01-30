import React, { Component } from 'react';
import logo from './anchorlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-link">
            <li>Helen Akparanta, Administrator</li>
            <li>email</li>
            <li>phone number</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

export class Topbar extends Component {
  render(){
    return{

    }
  }
}
