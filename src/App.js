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
  }

  componentDidMount() {
    this.performSearch('avocado', 'avocadoImages');
    this.performSearch('cats', 'catsImages');
    this.performSearch('acai bowl', 'acaiBowlImages');
  }

  performSearch = (query, imageName) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => this.setState({
        [imageName]: res.data.photos.photo,
        initialState: false,
        query,
      }))
      .catch(err => console.log('Error fetching and parsing data:', err))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Header onSearch={this.performSearch} />
          <Switch>
            <Route exact path="/search/avocado" component={() => <Gallery pictures={this.state.avocadoImages} initialState={this.state.initialState} query={'avocado'}/>} />
            <Route exact path="/search/cats" component={() => <Gallery pictures={this.state.catsImages} initialState={this.state.initialState} query={'cats'}/>} />
            <Route exact path="/search/acai-bowl" component={() => <Gallery pictures={this.state.acaiBowlImages} initialState={this.state.initialState} query={'acai bowl'}/>} />
            <Route path="/search/:query" component={() => <Gallery pictures={this.state.images} initialState={this.state.initialState} query={this.state.query}/>} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
