import React, { Component } from 'react';
import './Postit.css';

class Postit extends Component{

  render() {

    return(
      <p className="Postit">{this.props.desc}</p>
    );
  }

}

export default Postit
