import React, { Component } from 'react';

import './App.css';

import Movies from './component/Movies/Movies';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            input: '',
            target: ''

        }
        this.handelchange = this.handelchange.bind(this)
        this.submitchange = this.submitchange.bind(this)
    }

    componentDidMount() {
        this.fetchMovieInfo()

    }

    handelchange(event) {
        this.setState({ input: event.target.value })
    }
    
    submitchange() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6243f561bcd008ec397a81449573a5f4&query=${this.state.input}`)
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                this.setState({
                    movies: res.results

                })
            })

    }
    fetchMovieInfo = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                this.setState({
                    movies: res.results.slice(0, 4)
                })
            });
    }

    render() {
        if (this.state.movies.length !== 0) {
            return ( 
                <div className = "main-container" >
                    <h1 className = "main-heading" > The top four Movies </h1>
                    <div className = "search">
                        <label className = "search-label">
                            <input type = "search" className = "search-text" placeholder = "Search about movie ..." onChange = { this.handelchange }/>
                            <i className="fas fa-search search-icon"></i>
                        </label>
                        <button className = "search-btn" onClick={this.submitchange}>search</button >
                    </div> 
                    
                        <Movies Movies = { this.state.movies}/>   
                   </div>
        )}

        else {
            return (
                <h1>There are no results that match your search. Try again!</h1>
            )
        }
    }
}
export default App;