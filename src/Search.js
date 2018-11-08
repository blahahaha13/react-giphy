import React, { Component } from 'react';

class Search extends Component {
  render (){
    return (
      <div className="Searchbar">
        <form>
          <input placeholder='Search for Gifs' type='text' />
          <button type="submit">Search</button> 
        </form>
      </div>
    )
  }
}

export default Search;