import React, { Component } from 'react';
import Photo from './Photo';
import '../css/index.css';


class PhotoContainer extends Component {
    render() {
        return(
            <div className='photo-container'>
                <h2>Results</h2>
                <ul>
                    {this.props.searchResults.map(photo => (
                        <Photo key={ photo.id } photo={ photo } />
                    ))}
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;