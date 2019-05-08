import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log( response );
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

render() {
  return (
    <div className = "App">
      <FriendsList friends = {this.state.friends}/>
    </div>
  );
};

export default App;