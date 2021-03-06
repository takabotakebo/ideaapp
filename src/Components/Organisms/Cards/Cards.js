import React, { Component } from 'react';
import Card from '../../Molecules/Card/Card';
import './Cards.css';

class Cards extends Component{

  render(){

    if (this.props.isLoading) {
      return <h2>Loading・・・</h2> ;
    }

    if (this.props.hasError) {
      return <h2>Error!!!</h2>
    }

    const cards = this.props.cards.map( card =>
      <Card
        key={card.id}
        desc={card}
      />
    )

    return(
      <div className="Cards">
        {cards}
      </div>
    );
  }

}

export default Cards
