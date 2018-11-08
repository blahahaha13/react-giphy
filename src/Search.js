import React, { Component } from 'react';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    let query = this.state.query
    console.log(query)
  }
  render (){
    return (
      <div className="Searchbar">
        <form onSubmit={ this.onSubmit }>
          <input 
            placeholder='Search for Gifs'
            type='text'
            onChange={ this.onChange }
            value={this.state.query} />
          <button type="submit">Search</button> 
        </form>
      </div>
    )
  }
}

export default Search;