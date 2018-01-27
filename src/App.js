import React, { Component } from 'react';
import './App.css';
import MovieList from './MoviesList';
import MovieForm from './MovieForm';
import MoviesStorage from './MoviesStorage';

let moviesStorage = new MoviesStorage();

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: moviesStorage.get()
        };
        this.addNewMovie = this.addNewMovie.bind(this);
    }


    addNewMovie (newMovie) {
        const movies = this.state.movies.slice();
        let lastMovieId = Math.max.apply(Math, movies.map(function(obj){return obj.id;}));
        const movieItem = newMovie;
        movieItem.id = lastMovieId + 1;

        movies.push(movieItem);
        this.setState({movies: movies});
        moviesStorage.set(movieItem);
    }

  render() {
    const movies = this.state.movies;
    return (
        <div className="container">
            <MovieForm formSubmit={this.addNewMovie} />
            <MovieList movies={movies} />
        </div>
    );
  }
}

export default App;
