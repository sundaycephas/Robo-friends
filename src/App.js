import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            Robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({Robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filtereRobots = this.state.Robots.filter(Robot =>{
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.Robots.lenght) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList Robots={filtereRobots}/>
            </Scroll>
            <h4>copyright sundaycephas &copy; 2021</h4>
        </div>
        ); 
    }
    }
}

export default App;