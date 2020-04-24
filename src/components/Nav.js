import React from 'react';
import { NavLink } from 'react-router-dom'
import SearchForm from './SearchForm';
import '../css/index.css';

const Nav = () => {
    return(
        <div>
            <SearchForm />

            {/* Nav Links */}
            <nav className='main-nav'>
                <ul>
                    <li><NavLink exact to='/'>Cats</NavLink></li>
                    <li><NavLink exact to='/'>Dogs</NavLink></li>
                    <li><NavLink exact to='/'>Computers</NavLink></li>
                </ul>

            </nav>
        </div>
    );
};

export default Nav;