import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import apiKey from './config';
import Header from './components/Header';
import Gallery from './components/Gallery'

class App extends Component {
  state = {
    images: []
  }

  performSearch = query => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=817f1e338c444ff681b9b3ebbe4836a6&text=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => this.setState({
        images: res.data.photos.photo
      }))
      .catch(err => console.log('Error fetching and parsing data:', err))
  }

  render() {
    return (
      <div className="container">
        <Header onSearch={this.performSearch} />
        <Gallery pictures={this.state.images} />
      </div>
    );
  }
};

export default App;
