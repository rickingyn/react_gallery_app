import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './components/context';
import Routers from './components/Routers';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import './css/index.css';

class App extends Component {
  // render SearchForm, Nav and Routers Component
  render() {
      return( 
          <BrowserRouter>
            <div className='container'>
              <Provider>
                <SearchForm />
                <Nav />
                <Routers />
              </Provider>
            </div>
          </BrowserRouter>
      );
  }
}

export default App;
