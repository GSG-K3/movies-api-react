/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import './Movie.css'

class Movie extends Component {
    render (){
        return(
            <ul className = "movie-container">
                <h1 className = "heading">{this.props.movie.title}</h1>
                <img className = "poster" src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} />
                    <p className ="overview">{this.props.movie.overview}</p>
                    <p className = "rating"> Rating: {this.props.movie.vote_average}</p>
            </ul>
        )
    }
}

export default Movie;