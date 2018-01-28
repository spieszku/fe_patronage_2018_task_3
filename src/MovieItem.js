import React from 'react';

export default class MovieItem extends React.Component {
    render() {
        const symbolTrue = "☑";
        const symbolFalse = "☒";
        let symbol;
        if(this.props.seen === 'T') {
            symbol = symbolTrue;
        }
        else {
            symbol = symbolFalse;
        }
        return (
            <li className="movie-item" id={this.props.id}>
                <p>{this.props.title}</p>
                <p className="col-3">Year: {this.props.year}</p>
                <p className="col-3">Genre: {this.props.genre}</p>
                <p className="col-3 movie-status" onClick={this.changeStatus.bind(this)}>{symbol}</p>
                <p>{this.props.summary}</p>
            </li>
        );
    }
    changeStatus () {
        this.props.handleStatus(this.props.id);
    }
}