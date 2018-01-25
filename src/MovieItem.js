import React from 'react';

export default class MovieItem extends React.Component {
    render() {
        return (
            <li className="movie-item">
                <p>{this.props.title}</p>
                <p className="col-3">Year: {this.props.year}</p>
                <p className="col-3">Genre: {this.props.genre}</p>
                <p className="col-3 movie-status">{this.props.seen}</p>
                <p>{this.props.summary}</p>
            </li>
        );
    }
}