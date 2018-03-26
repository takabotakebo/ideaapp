import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

  render() {

    return(
      <li className="Card">
        <p>{this.props.desc[0]}</p>
        <p>{this.props.desc[1]}</p>
      </li>
    );
  }

}

export default Card
