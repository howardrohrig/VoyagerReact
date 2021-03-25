import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';

class App extends Component {

    state = {
        isOpen: false
    }

    navToggle = () => {
        const toggleBtn = this.state.isOpen;
        this.setState({isOpen: !toggleBtn});
    }

    render() {
        return (
            <div className="App">
                <Header toggle={this.navToggle} isOpen={this.state.isOpen}/>
            </div>
        );
    }
}

export default App;