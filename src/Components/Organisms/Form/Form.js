import React, { Component } from 'react'
import './Form.css'

class Form extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="Form">
        <input name="desc" placeholder="入力" defaultValue="作ってます！"/>
        <button type="submit">メモ</button>
      </form>
    )
  }
}

export default Form
