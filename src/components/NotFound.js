import React from 'react';

const NotFound = () => {
    return(
        <div className='photo-container'>
            <ul>
                <li className='not-found'>
                    <h3>No results found</h3>
                    <p>That search did not return any results, please try again.</p>
                </li>
            </ul>
        </div>
    );
};

export default NotFound;