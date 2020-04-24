import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Route';
import Nav from './components/Nav';

const App = () => {
  return(
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
  );
}

export default App;
