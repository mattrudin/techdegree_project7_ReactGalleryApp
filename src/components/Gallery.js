import React from 'react'
import GalleryItem from './GalleryItem';
import NoResult from './NoResult';

const Gallery = props => {
    const { initialState, pictures, query, isLoading } = props;

    // initialization of the result
    let result;
    if(initialState) {
      // null if its the first search attempt
      result = null;
    } else if(isLoading) {
      // Extra credit: loading indicator
      result = <p>Loading...</p>
    } else if(pictures.length > 0) {
      // results of the data fetching
      result =  <>
                  <h2>Results for {query}</h2>
                  <ul>
                    {pictures.map(picture => <GalleryItem data={picture} key={picture.id}/>)}
                  </ul>
                </>  
    } else {
      // Extra credit: Message to user if nothing was found
      result = <NoResult />
    }

    return(
      <div className="photo-container">
        {result}
      </div>
    )
  }


export default Gallery;