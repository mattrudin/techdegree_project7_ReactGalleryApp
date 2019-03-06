import React from 'react'
import GalleryItem from './GalleryItem';
import NoResult from './NoResult';

const Gallery = props => {
  const { initialState, pictures } = props;

  let result;
  if(initialState) {
    result = null;
  } else if(pictures.length > 0) {
    result =  <>
                <h2>Results</h2>
                <ul>
                  {pictures.map(picture => <GalleryItem data={picture} key={picture.id}/>)}
                </ul>
              </>  
  } else {
    result = <NoResult />
  }
  
  return(
    <div className="photo-container">
      {result}
    </div>
  )
}

export default Gallery;