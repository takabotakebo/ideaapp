import React, { Component } from 'react';
import Card2 from '../../Molecules/Card2/Card2';
import './Cards2.css';

class Cards2 extends Component{

  render(){

    if (this.props.isLoading) {
      return <h2>Loading・・・</h2> ;
    }

    if (this.props.hasError) {
      return <h2>Error!!!</h2>
    }

    const cards = this.props.cards.map( (card, index) =>
      <Card2
        key={index}
        desc={card}
        num={index}
      />
    )

    return(
      <div className="Cards2">
        {cards}
      </div>
    );
  }

}

export default Cards2
