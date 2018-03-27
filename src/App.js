import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shuffle from './Components/Pages/Shuffle/Shuffle';

class App extends Component {

  constructor(){
    super()
    const postits = [];
    const cards = [];
    this.state = {
      page: "Shuffle"
    }
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Shuffle />
      </div>
    );
  }
}

export default App;
