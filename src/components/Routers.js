import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cats from './defaultSeach/Cats';
import Dogs from './defaultSeach/Dogs';
import Computers from './defaultSeach/Computers';
import PhotoContainer from './PhotoContainer';
import ErrorPage from './ErrorPage';

const Routers = () => {
    return(
        <Switch>
            <Route exact path='/' render={ () => <Redirect to='/cats' /> } />
            <Route exact path='/cats' render={ (routerProps) => <Cats {...routerProps} /> } />
            <Route exact path='/dogs' render={ () => <Dogs /> } />
            <Route exact path='/computers' render={ () => <Computers /> } />
            <Route exact path='/:id' render={ () => <PhotoContainer /> } />
            {/* redirect back to home page if at any other URL */}
            <Route render={ () => <ErrorPage /> } />
        </Switch>
    );
};

export default Routers;