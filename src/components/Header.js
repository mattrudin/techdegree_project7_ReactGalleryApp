import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const GalleryItem = props => (
    <>
        <SearchForm onSearch={props.onSearch}/>
        <Navigation />
    </>
);

export default GalleryItem;