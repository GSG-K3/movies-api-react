import React, { Component } from 'react';

import Movie from '../Movie/Movie';

import './Movies.css';


// let imgpath = "http://image.tmdb.org/t/p/w185"
// let imgg = ""

// console.log(imgpath)
class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.Movies.map((Movies, i) => <li key={i} className="movieitem" >

                    <img className="poster"
                        src={`http://image.tmdb.org/t/p/w185${Movies.poster_path}`} />
                    <h4>{Movies.title}</h4>
                    <p>{Movies.overview}</p>
                    <p> Rate: {Movies.vote_average}</p>
                </li>)}
            </div>
        )
    }
}

export default Movies;