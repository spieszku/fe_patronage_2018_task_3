import React from 'react';

export default class MovieItem extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.title}</p>
                <p className="col3">Year: {this.props.year}</p>
                <p className="col3">Genre: {this.props.genre}</p>
                <p className="col3 movie-status" data-id={this.props.id}>{this.props.seen}</p>
                <p>{this.props.summary}</p>
            </li>
        );
    }
}