import React, { Component } from 'react';
import Postit from '../../Molecules/Postit/Postit';
import './Bord.css';

class Bord extends Component{

  render(){

    if (this.props.isLoading) {
      return <h2>Loading・・・</h2> ;
    }

    if (this.props.hasError) {
      return <h2>Error!!!</h2>
    }

    const postits = this.props.postits.map( postit =>
      <Postit
        key={postit.id}
        desc={postit}
      />
    )

    return(
      <div className="Bord">
        {postits}
      </div>
    );
  }

}

export default Bord
