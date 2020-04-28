import React from 'react';
import '../css/index.css';

const Photo = (props) => {
    return(
        <div className='photo-thumbnail'>
            <li>
                <img 
                    src={`https://farm${props.photo.farm}.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`}
                    alt={props.photo.id} 
                    />
            </li>
        </div>
    );
};

export default Photo;