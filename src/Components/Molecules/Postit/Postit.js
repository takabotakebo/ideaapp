import React, { Component } from 'react';
import './Postit.css';

class Postit extends Component{

  render() {

    return(
      <li className="Postit">
        <p>{this.props.desc}</p>
      </li>
    );
  }

}

export default Postit
