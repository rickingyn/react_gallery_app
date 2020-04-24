import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';

const Router = (props) => {
    return(
        <Switch>
            <Route exact path='/' render={ () => <PhotoContainer photos={ props.photos } /> } />
        </Switch>
    );
};

export default Router;