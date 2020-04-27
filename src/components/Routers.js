import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cats from './defaultSeach/Cats';
import Dogs from './defaultSeach/Dogs';
import Computers from './defaultSeach/Computers';
import PhotoContainer from './PhotoContainer';

const Routers = (props) => {
    return(
        <Switch>
            <Route exact path='/' render={ () => <Redirect to='/cats' /> } />
            <Route exact path='/cats' render={ (routerProps) => <Cats {...routerProps} cats={ props.cats } updateResults={props.updateResults} /> } />
            <Route exact path='/dogs' render={ () => <Dogs dogs={ props.dogs } /> } />
            <Route exact path='/computers' render={ () => <Computers computers={ props.computers } /> } />
            <Route path='/:id' render={ () => <PhotoContainer isLoading={ props.isLoading } result={ props.result } searchResults={ props.searchResults } /> } />
        </Switch>
    );
};

export default Routers;