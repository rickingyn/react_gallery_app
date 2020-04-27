import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import '../css/index.css';


class PhotoContainer extends Component {
    render() {
        return(
            <div>
                {(this.props.isLoading) ? <p>Loading...</p> : (
                    (this.props.result) ? (
                        <div>
                            <div className='photo-container'>
                                <h2>Results</h2>
                                <ul>
                                    {this.props.searchResults.map(photo => (
                                        <Photo key={ photo.id } photo={ photo } />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : <div><NotFound /></div>
                )}
            </div>
        );
    }
}

export default PhotoContainer;