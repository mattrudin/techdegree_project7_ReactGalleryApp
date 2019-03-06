import React from 'react'
import GalleryItem from './GalleryItem';
import NoResult from './NoResult';

const Gallery = props => (
    <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <GalleryItem
            src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
            alt="cute cat"
            />
          {/* <!-- Not Found --> */}
          <NoResult />
        </ul>
      </div>
);

export default Gallery;