import React from 'react';
import MovieItem from './MovieItem.js';


export default class MoviesList extends React.Component {
    render() {
        return(
            <div id="moviesListContainer">
                <ul className="moviesList">
                {this.props.movies.map(movie =>
                    <MovieItem
                        handleStatus={this.props.changeMovieStatus}
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        genre={movie.genre}
                        summary={movie.summary}
                        seen={movie.seen}
                    /> )}
                </ul>
            </div>
        );
    }
}
