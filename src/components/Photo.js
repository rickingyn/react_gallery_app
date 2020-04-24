import React from 'react';

const Photo = (props) => {
    return(
        <div>
            <li>
                <img 
                    src={`https://farm${props.photo.farm}.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`}
                    alt={props.photo.id} // add search result here
                    />
            </li>
        </div>
    );
};

export default Photo;