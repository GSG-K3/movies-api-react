import React, { Component } from 'react';

import './App.css';

import Movies from './component/Movies/Movies'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            movies: [] 
        }
    }

    componentDidMount() {
        this.fetchMovieInfo()
    }

    fetchMovieInfo = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                this.setState({
                    movies: res.results
                })
            });
    }

    render(){
        return (
            <div className="main-container">
                <h1 className = "main-heading">The top four Movies</h1>
                <Movies Movies = {this.state.movies.slice(0,4)}/>
            </div>
        )
    }
}
export default App;