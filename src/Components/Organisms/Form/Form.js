import React, { Component } from 'react'
import './form.css'

class Form extends Component {

  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <textarea name="desc" placeholder="入力" defaultValue="作ってます！"></textarea><br/>
          <button type="submit">リストに追加</button>
        </form>
      </div>
    )
  }

}

export default Form
