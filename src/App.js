import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import Header from './components/Header';
import Gallery from './components/Gallery'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Gallery />
      </div>
    );
  }
};

export default App;
