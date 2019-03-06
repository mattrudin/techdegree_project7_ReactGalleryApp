import React from 'react'
import GalleryItem from './GalleryItem';
import NoResult from './NoResult';

const Gallery = props => {
  const { pictures } = props;
  let result = pictures.length > 0 ? pictures.map(picture => <GalleryItem data={picture} key={picture.id}/>) : <NoResult />
  
  return(
    <div class="photo-container">
        <h2>Results</h2>
        <ul>
          {result}
        </ul>
      </div>
  )
}

export default Gallery;