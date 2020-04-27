import React from 'react';
import Photo from '../Photo';
import '../../css/index.css';

const PhotoContainer = (props) => {
    return(
        <div className='photo-container'>
            <h2>Results</h2>
            <ul>
                {props.computers.map(photo => (
                    <Photo key={ photo.id } photo={ photo } />
                ))}
            </ul>
        </div>
    );
}

export default PhotoContainer;