import React from 'react';

const GalleryItem = props => (
    <li>
        <img src={props.src} alt={props.alt} />
    </li>
);

export default GalleryItem;