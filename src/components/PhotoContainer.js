import React from 'react';
import { Consumer } from './context';
import Photo from './Photo';
import NotFound from './NotFound';
import '../css/index.css';

const PhotoContainer = () => {
    return(
        <Consumer>
            {/* deconstruct cats prop from context */}
            { ({ isLoading, result, searchResults, searchTag }) => {
                return(
                    // check if data is loading and render
                        // if page is loaded, check if there are results;
                            // render results photos if there are results, else render NotFound Component
                    <div>
                        {(isLoading) ? <p>Loading...</p> : (
                            (result) ? (
                                <div>
                                    <div className='photo-container'>
                                        <h2>{searchTag}</h2>
                                        <ul>
                                            {searchResults.map(photo => (
                                                <Photo key={ photo.id } photo={ photo } />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : <div><NotFound /></div>
                        )}
                    </div>
                );
            }}
        </Consumer>
    );
}

export default PhotoContainer;