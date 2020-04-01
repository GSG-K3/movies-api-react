import React, { Component } from 'react';

import Movie from '../Movie/Movie';

import './Movies.css';

class Movies extends Component {
    render() {
        return (
            <div className = "movies-container">
                  {this.props.Movies.map((movie, i) => <Movie key={i} movie ={movie}/>)}
            </div>
        )
    }
}

export default Movies;