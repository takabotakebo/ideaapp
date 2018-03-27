import React, { Component } from 'react';
import './App.css';
import Shuffle from './Components/Pages/Shuffle/Shuffle';
import Dice from './Components/Pages/Dice/Dice';

class App extends Component {

  constructor(){
    super()
    this.state = {
      page: "Shuffle"
    }
  }

  changePage1(){
    this.setState({
      page: "Dice"
    });
  }

  changePage2(){
    this.setState({
      page: "Shuffle"
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.page === "Shuffle" && (
          <Shuffle changePage={this.changePage1.bind(this)}/>
        )}
        {this.state.page === "Dice" && (
          <Dice changePage={this.changePage2.bind(this)} />
        )}
      </div>
    );
  }
}

export default App;
