import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import gallery from "./config.js"

class App extends Component {
  render() {
    return (
        <div>
            <Header gallery={gallery}/>
        </div>
    );
  }
}

export default App;
