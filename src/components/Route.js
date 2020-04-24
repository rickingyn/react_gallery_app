import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import Photo from './Photo';

const Router = () => {
    return(
        <Switch>
            <Route exact path='/' render={ () => <PhotoContainer /> } />
            <Route exact path='/photo' render={ () => <Photo /> } />
            <Route render={ () => <NotFound /> } />
        </Switch>
    );
};

export default Router;