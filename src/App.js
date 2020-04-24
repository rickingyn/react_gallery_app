import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Router from './components/Route';
import Nav from './components/Nav';
import apiKey from './config';

class App extends Component {
  state = {
    photos: []
  };

  // when DOM is rendered, call API with axios and update photos state to data received; setting default tag to cats

  componentDidMount() {
    const defaultTag = 'cats';
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${defaultTag}&per_page=24&format=json&nojsoncallback=1`;

    axios.get(URL)
      .then(response => (
        this.setState({ 
          photos: response.data.photos.photo
        })
      ))
      .catch(error => console.log(error));
  }

  // function to fetch new API with tag from search form and update photos state
  updatePhotos = (tag) => {
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`;
    axios.get(URL)
      .then(response => (
        this.setState({ 
          photos: response.data.photos.photo
        })
      ))
      .catch(error => console.log(error));
  };

  // render Nav and route of current URL
  render() {
      return( 
          <BrowserRouter>
            <Nav updatePhotos={ this.updatePhotos }/>
            <Router photos={ this.state.photos }/>
          </BrowserRouter>
      );
  }
}

export default App;
