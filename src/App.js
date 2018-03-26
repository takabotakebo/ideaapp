import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bord from './Components/Organisms/Bord/Bord';
import Cards from './Components/Organisms/Cards/Cards';
import Form from './Components/Organisms/Form/Form';

class App extends Component {

  constructor(){
    super()
    const postits = [];
    const cards = [];
    this.state = {
      isLoading: false,
      hasError: false,
      postits: postits,
      cards: cards
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const desc = e.target.desc.value;
    const postits = this.state.postits.slice();
    postits.push(desc);
    this.setState({ postits: postits });
    e.target.desc.value = '';
  }

  shuffleSubmit() {
    let cards = this.shuffle(this.state.postits.slice());
    if(( cards.length % 2 ) !== 0 ){
      cards.push(" ");
      cards = this.splitAayrr(cards, 2);
      console.log(cards);
      this.setState({ cards: cards });
    } else {
      cards = this.splitAayrr(cards, 2);
      console.log(cards);
      this.setState({ cards: cards });
    }
  }

  shuffle(array) {
    for(var i = array.length - 1; i > 0; i--){
      var r = Math.floor(Math.random() * (i + 1));
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }

  splitAayrr(baseArr, splitCount){
    const allCount = baseArr.length;
    let newArr = [];
    for(var i = 0; i < Math.ceil(allCount/splitCount); i++) {
      var startCount = i * splitCount;
      var p = baseArr.slice(startCount, startCount + splitCount); // i*spritCount 番目から i*splitCount + splitCount 番目まで取得
      newArr.push(p); // 取得したものを newArr に追加
    }
    return newArr;
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>tがんばろー</h1>
        <div onClick={this.shuffleSubmit.bind(this)}>シャッフル</div>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <Bord
          postits={this.state.postits}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />

        <Cards
          cards={this.state.cards}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default App;
