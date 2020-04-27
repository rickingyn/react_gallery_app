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
            <Route exact path='/cats' render={ (routerProps) => <Cats {...routerProps} /> } />
            <Route exact path='/dogs' render={ () => <Dogs /> } />
            <Route exact path='/computers' render={ () => <Computers /> } />
            <Route exact path='/:id' render={ () => <PhotoContainer 
                isLoading={ props.isLoading } 
                result={ props.result } 
                searchResults={ props.searchResults } 
            /> } />
            
            {/* redirect back to home page if at any other URL */}
            <Redirect to='/' />
        </Switch>
    );
};

export default Routers;