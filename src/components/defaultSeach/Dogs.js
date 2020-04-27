import React from 'react';
import { Consumer } from '../context';
import Photo from '../Photo';
import '../../css/index.css';

const PhotoContainer = () => {
    return(
        // use context to consumer data from Provider
        <Consumer>
            {/* deconstruct cats prop from context */}
            { ({ dogs }) => {
                return(
                    <div className='photo-container'>
                        <h2>Results</h2>
                        <ul>
                           {/* map through cats context and render Photo Component */}
                            {dogs.map(photo => (
                                <Photo key={ photo.id } photo={ photo } />
                            ))}
                        </ul>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default PhotoContainer;