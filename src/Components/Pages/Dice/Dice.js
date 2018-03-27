import React, { Component } from 'react';
import './Dice.css';
import Cards2 from '../../Organisms/Cards2/Cards2';
import Form from '../../Organisms/Form/Form';

class Dice extends Component {

  constructor(){
    super();
    const cards = [];
    this.state = {
      isLoading: false,
      hasError: false,
      cards: cards
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(e.target.desc.value === "") {
      return ;
    }
    const desc = e.target.desc.value;
    const cards = this.state.cards.slice();
    cards.push(desc);
    this.setState({ cards: cards });
    e.target.desc.value = "";
  }

  shuffleSubmit() {
    let cards = this.shuffle(this.state.cards.slice());
    this.setState({ cards: cards });
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
    return (
      <div className="Dice">
        <img src="./modechange-dice.png" className="modechange" onClick={this.props.changePage} alt="pic"/>
        <img src="./reset.png" className="resetbtn" onClick={this.reset.bind(this)} alt="pic"/>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <div onClick={this.shuffleSubmit.bind(this)} className="shufflebtbn2" />
        <Cards2
          cards={this.state.cards}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default Dice;
