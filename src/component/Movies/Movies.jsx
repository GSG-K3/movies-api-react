import React, {Component} from 'react';

import Movie from '../Movie/Movie';

import './Movies.css';


class Movies extends Component {
    render(){
        return (
            <div>
              {this.props.Movies.map((Movies, i) => <li key = {i}>
                    <h4>{Movies.title}</h4>
                    <p>{Movies.overview}</p>
                    <p> Rate: {Movies.vote_average}</p>
                  </li>)}
            </div>
        )
    }
}

export default Movies;