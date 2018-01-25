import React, { Component } from 'react';
import './App.css';
import MovieList from './MoviesList';
import MovieForm from './MovieForm';

class App extends Component {
  render() {
    return (
        <div className="container">
            <MovieForm />
            <MovieList />
        </div>
    );
  }
}

export default App;
