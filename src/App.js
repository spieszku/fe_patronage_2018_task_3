import React, { Component } from 'react';
import './App.css';
import MovieList from './MoviesList';
import MovieForm from './MovieForm';
import MoviesStorage from './MoviesStorage';
import Counter from './Counter.js';

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

    setCounter () {
        moviesStorage.length();
    }
    changeMovieStatus(id) {
        const movies = this.state.movies.slice();
        let changedMovie = moviesStorage.get(id);
        if (changedMovie.seen === 'T') {
            changedMovie.seen = 'F';
        }
        else if (changedMovie.seen === 'F') {
            changedMovie.seen = 'T';
        }
        moviesStorage.set(changedMovie, changedMovie.id);
        this.setState({movies: movies});
    }

  render() {
    const movies = this.state.movies;
      const countAll = this.state.movies.length;
    return (
        <div className="container">
            <Counter countAll={countAll} />
            <MovieForm formSubmit={this.addNewMovie} />
            <MovieList movies={movies} changeMovieStatus={this.changeMovieStatus.bind(this)} />
        </div>
    );
  }
}

export default App;
