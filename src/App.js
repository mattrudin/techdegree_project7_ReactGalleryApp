import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import apiKey from './config';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {
  state = {
    images: [],
    avocadoImages: [],
    catsImages: [],
    acaiBowlImages: [],
    initialState: true,
    query: '',
    isLoading: false,
  }

  componentDidMount() {
    this.presetSearch('avocado', 'avocadoImages');
    this.presetSearch('cats', 'catsImages');
    this.presetSearch('acai bowl', 'acaiBowlImages');
  }

  performSearch = query => {
    this.setState({
      isLoading: true,
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => this.setState({
        images: res.data.photos.photo,
        initialState: false,
        query,
        isLoading: false,
      }))
      .catch(err => console.log('Error fetching and parsing data:', err))
  }

  presetSearch = (query, imageName) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => this.setState({
        [imageName]: res.data.photos.photo,
      }))
      .catch(err => console.log('Error fetching and parsing data:', err))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Header onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/" component={null} />
            <Route exact path="/search/avocado" component={() => <Gallery pictures={this.state.avocadoImages} query={'avocado'}/>} />
            <Route exact path="/search/cats" component={() => <Gallery pictures={this.state.catsImages} query={'cats'}/>} />
            <Route exact path="/search/acai-bowl" component={() => <Gallery pictures={this.state.acaiBowlImages} query={'acai bowl'}/>} />
            <Route path="/search/:query" component={() => <Gallery 
                pictures={this.state.images} 
                initialState={this.state.initialState} 
                query={this.state.query}
                isLoading={this.state.isLoading} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
