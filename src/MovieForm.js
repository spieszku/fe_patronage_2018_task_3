import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            genre: '',
            year: '',
            summary: '',
            seen: 'F'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>  {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: target.value});
    };

    handleSubmit() {
        this.props.formSubmit(this.state);
    }

    render() {
        return(
            <div id="formContainer">
                <form id="addMovieForm">
                    <p className="form-item">
                        <label htmlFor="#movieTitle">Title *</label>
                        <input id="#movieTitle" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </p>
                    <p className="form-item">
                        <label htmlFor="#movieYear">Year *</label>
                        <input id="#movieYear" type="number" name="year" value={this.state.year} onChange={this.handleChange} />
                    </p>
                    <p className="form-item">
                        <label htmlFor="#movieGenre">Genre *</label>
                        <input id="#movieGenre" type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
                    </p>
                    <input type="button" value="Add" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}