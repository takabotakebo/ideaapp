import React, { Component } from 'react';
import './Shuffle.css';
import Bord from '../../Organisms/Bord/Bord';
import Cards from '../../Organisms/Cards/Cards';
import Form from '../../Organisms/Form/Form';

class Shuffle extends Component {

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
    if(e.target.desc.value === "") {
      return ;
    }
    const desc = e.target.desc.value;
    const postits = this.state.postits.slice();
    postits.push(desc);
    this.setState({ postits: postits });
    e.target.desc.value = "";
  }

  shuffleSubmit() {
    let cards = this.shuffle(this.state.postits.slice());
    if(( cards.length % 2 ) !== 0 ){
      cards.push("ー");
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

  reset(){
    this.setState({
      postits: [],
      cards: []
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="Shuffle">
        <img src="./modechange-suf.png" className="modechange" />
        <img src="./reset.png" className="resetbtn" onClick={this.reset.bind(this)}/>
        <Bord
          postits={this.state.postits}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
        <div onClick={this.shuffleSubmit.bind(this)} className="shufflebtbn" />
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <Cards
          cards={this.state.cards}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default Shuffle;
