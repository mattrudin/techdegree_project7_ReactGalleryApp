import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const GalleryItem = props => (
    <>
        <Link to="/"><h1 className="title">Find A Pic!</h1></Link>
        <h2>Your first place to find a pic</h2>
        <SearchForm onSearch={props.onSearch}/>
        <Navigation />
    </>
);

export default GalleryItem;