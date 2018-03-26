import React, { Component } from 'react';
import Todo from '../../Molecules/Todo/Todo';

class TodoList extends Component{

  render(){

    if (this.props.isLoading) {
      return <h2>Loading・・・</h2> ;
    }

    if (this.props.hasError) {
      return <h2>Error!!!</h2>
    }

    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        setTodoStatus={this.props.setTodoStatus}
      />
    )

    return(
      <ul>
        {todos}
      </ul>
    );
  }

}

export default TodoList
