import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';

class SearchContainer extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      response: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.search = this.search.bind(this);
  }

  search = () => {
    axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            api_key:'P3zBiWJKGVAx7eEnzCyNxHhWYduakUdR',
            query:this.state.query
        }
    })
    .then((res) => {
        this.setState({
            response: res.data.data
        });
    })
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
  
  shouldComponentUpdate = (nextProps, nextState) => {
    if(this.state.response.length === 0 &&
        this.state.query === nextState.query){
        return false;
    }
    return true;
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.query !== this.state.query){
        this.search();
    }
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