import React from 'react';

const Search = (props) => {

  return (
    <div className="Searchbar">
      <form onSubmit={props.onSubmit}>
        <input 
          placeholder='Search for Gifs'
          type='text'
          onChange={props.onChange}
          />
        <button type="submit">Search</button> 
      </form>
    </div>
  )
}

export default Search;