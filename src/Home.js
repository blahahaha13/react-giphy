import React, { Component } from 'react';
import SearchContainer from './Components/SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1> Gif Searcher</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
