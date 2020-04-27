import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <div className='photo-container main-nav'>
            <ul>
                <li className='not-found'>
                    <h3>404 Error: Page Not Found. Sorry!</h3>
                    <p>To be redirected back to the home page, click below:</p>
                    <p style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link style={{ width: '100px', background: 'red' }} to='/'>Go Back!</Link></p>
                </li>
            </ul>
        </div>
    );
};

export default ErrorPage