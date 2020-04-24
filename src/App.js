import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Router from './components/Route';
import Nav from './components/Nav';
import apiKey from './config';

class App extends Component {
  state = {
    api: []
  };

  componentDidMount() {
    const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets.&per_page=&format=json&nojsoncallback=1`;

    axios.get(URL)
      .then(response => 
        console.log(response.data))
      .catch(error => console.log(error));
  }

  render() {
      return( 
          <BrowserRouter>
            <Nav />
            <Router />
          </BrowserRouter>
      );
  }
}

export default App;
