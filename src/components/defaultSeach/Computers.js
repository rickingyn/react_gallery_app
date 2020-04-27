import React from 'react';
import { Consumer } from '../context';
import Photo from '../Photo';
import '../../css/index.css';

const PhotoContainer = () => {
    return(
        // use context to consumer data from Provider
        <Consumer>
            {/* deconstruct cats prop from context */}
            { ({ computers }) => {
                return(
                    <div className='photo-container'>
                        <div className='title-container'>
                            <h2 className='title'>Computers</h2>
                        </div>
                        <ul>
                            {/* map through cats context and render Photo Component */}
                            {computers.map(photo => (
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