import React, { Component } from 'react';
import SearchButton from './SearchButton';

class SearchForm extends Component {
  
  searchInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.searchInput.current.value);
    event.currentTarget.reset();
  }

  render() {
    return(
      <form 
        className="search-form"
        onSubmit={this.handleSubmit} >
          <input
            type="search" 
            placeholder="Search" 
            ref={this.searchInput}
            required />
          <SearchButton />  
        </form>
    );
  }
} 

export default SearchForm;