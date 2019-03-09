import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchButton from './SearchButton';

class SearchForm extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    const query = this.query.value;
    const path = `search/${query}`;
    this.props.onSearch(query, 'images');
    this.props.history.push(path);
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
            ref={ input => this.query = input}
            required />
          <SearchButton />  
        </form>
    );
  }
} 

export default withRouter(SearchForm);