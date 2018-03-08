import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                title: '',
                genre: '',
                year: '',
                summary: '',
                seen: 'F'
            },
            validate: {
                genre: { valid: false, msg: ''},
                title: { valid: false, msg: ''},
                year: { valid: false, msg: ''},
                formValidate: false
            }
        };
        this.baseState = this.state;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>  {
        const target = event.target;
        const name = target.name;
        if(name === 'title') {
            this.validateTitle(target.value.trim());
        }
        else if (name === 'year') {
            this.validateDate(target.value);
        }
        else if (name === 'genre') {
            this.validateGenre(target.value.trim());
        }

        //update state
            this.setState(prevState => ({movie: {
            ...prevState.movie,[name]: target.value
        }}));


        // kind of dirty way to set state after value changed
        setTimeout(() => {
            this.validateForm();
        }, 300);
    };

    handleSubmit() {
        this.props.formSubmit(this.state.movie);
        this.setState(this.baseState);
    }
    validateTitle (value) {
        var valid, msg;
        if(value) {
            if(this.props.titleHandler(value) === undefined) {
                valid = true;
                msg = '';
            }
            else {
                msg = "Movie with this title already exist!"
            }
        }
        else {
            valid = false;
            msg = 'Title is required';
        }
        this.setState(prevState => ({validate: {
            ...prevState.validate, title: { valid, msg}
        }}));
    }
    validateDate (value) {
        var valid, msg;
        if(value > 999 && value < 10000) {
            valid = true;
        }
        else if (value.length === 0) {
            valid = false;
            msg = 'Year is required';
        }
        else {
            valid = false;
            msg = 'Year have to be 4 digit number!'
        }
        this.setState(prevState => ({validate: {
            ...prevState.validate, year:{ valid, msg }
        }}));
    }
    validateGenre (value) {
        var valid, msg;
        if(value.length > 0) {
            valid = true;
            msg ='';
        }
        else {
            valid = false;
            msg = 'Genre is required'
        }
        this.setState(prevState => ({validate: {
            ...prevState.validate, genre: { valid, msg }
        }}));
    }
    validateForm () {
        if(this.state.validate.year.valid && this.state.validate.title.valid && this.state.validate.genre.valid) {
            this.setState(prevState => ({validate: {
                ...prevState.validate,formValidate: true
            }}));
        }
        else {
            this.setState(prevState => ({validate: {
                ...prevState.validate,formValidate: false
            }}));
        }
    }

    render() {
        return(
            <div id="formContainer">
                <form id="addMovieForm">
                    <p className="form-item">
                        <label htmlFor="#movieTitle">Title *</label>
                        <input id="#movieTitle" type="text" name="title" value={this.state.movie.title} onChange={this.handleChange} />
                        <span className="error">{this.state.validate.title.msg}</span>
                    </p>
                    <p className="form-item">
                        <label htmlFor="#movieYear">Year *</label>
                        <input id="#movieYear" type="number" name="year" value={this.state.movie.year} onChange={this.handleChange} />
                        <span className="error">{this.state.validate.year.msg}</span>
                    </p>
                    <p className="form-item">
                        <label htmlFor="#movieGenre">Genre *</label>
                        <input id="#movieGenre" type="text" name="genre" value={this.state.movie.genre} onChange={this.handleChange} />
                        <span className="error">{this.state.validate.genre.msg}</span>
                    </p>
                    <p className="form-item">
                        <label htmlFor="#movieSummary">Summary</label>
                        <textarea id="#movieSummary" name="summary" rows="5" value={this.state.movie.summary} onChange={this.handleChange}></textarea>
                    </p>
                    <p className="form-submit">
                    <input disabled={!this.state.validate.formValidate} type="button" className="btn" value="Add" onClick={this.handleSubmit} />
               </p>
                </form>
            </div>
        );
    }
}