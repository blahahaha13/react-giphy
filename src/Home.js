import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1> Gif Searcher</h1>
        <Search />
      </div>
    );
  }
}

export default Home;
