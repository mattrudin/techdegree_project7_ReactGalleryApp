import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Navigation />
        <Results />
      </div>
    );
  }
}

export default App;
