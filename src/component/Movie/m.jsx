import React, { Component } from 'react';

import './Movie.css'
let url = ''
class Movieitem extends Component {
  constructor(props) {
    super(props)
    this.state = { movieitem: [] }
    this.fetchMovie()
  }

  fetchMovie = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6243f561bcd008ec397a81449573a5f4&query=${this.props.target}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({
          movieitem: res.results[0]

        })
        console.log(res.results[0])
      })
  }

  render() {
    return (

      <ul className="movie-container">
        <h1 className="heading">{this.state.movieitem.title}</h1>
        <img className="poster" src={`http://image.tmdb.org/t/p/w185${this.state.movieitem.poster_path}`} />
        <p className="overview">{this.state.movieitem.overview}</p>
        <p className="rating"> Rating: {this.state.movieitem.vote_average}</p>
      </ul>

    )
  }
}

export default Movieitem;




