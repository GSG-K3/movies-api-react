import React, { Component } from 'react';

import './App.css';

import Movies from './component/Movies/Movies'




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
                    movies: res.results.slice(0, 1)

                })
                console.log(res.results)
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

        return ( <
            div className = "main-container" >

            <
            h1 className = "main-heading" > The top four Movies < /h1> <
            input type = "search"
            onChange = { this.handelchange }
            /><button onClick={this.submitchange}>search</button > <
            Movies Movies = { this.state.movies }
            /> 

            <
            /
            div >
        )
    }
}
export default App;