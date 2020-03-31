import React, {Component} from 'react';

import './App.css';

import Movies from './component/Movies/Movies'


class App extends Component {
    render(){
        return (
            <div className="main-container">
        <h1 className = "main-heading">The top four Movies</h1>
        <Movies />
    </div>
        )
    }
}
export default App;