import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

  render() {

    return(
      <div className="Card">
        <p>{this.props.desc[0]}</p>
        <hr />
        <p>{this.props.desc[1]}</p>
      </div>
    );
  }

}

export default Card
