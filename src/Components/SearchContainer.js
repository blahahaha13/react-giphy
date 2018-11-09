import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      response: []
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
  
  render () {
    let results;
    if(this.state.response) {
      results = this.state.response.map((result) => {
        return (
          <section>
            <Results
            result={result}
            key={result.id}
            />
          </section>
        )
      })
    }
    return (
      <div className="search-container">
        <Search
        onChange={ this.onChange }
        onSubmit={ this.onSubmit } />
        {results}
      </div>
    )
  }
}

export default SearchContainer;