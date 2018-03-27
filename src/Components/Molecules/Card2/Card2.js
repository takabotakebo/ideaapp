import React, { Component } from 'react';
import './Card2.css';

class Card extends Component{

  render() {

    return(
      <div className="Card2">
        <p>{this.props.num + 1}. {this.props.desc}</p>
      </div>
    );
  }

}

export default Card
