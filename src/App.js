import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/Organisms/TodoList/TodoList';
import Form from './Components/Organisms/Form/Form';

class App extends Component {

  constructor(){
    super()
    const todos = [];

    this.state = {
      isLoading: false,
      hasError: false,
      todos: todos,
      countTodo: todos.length + 1
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos: todos });
    this.setState({ countTodo: countTodo + 1 });

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  setTodoStatus(clickedTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickedTodo.id - 1];
    todo.done = !todo.done;
    todos[clickedTodo.id - 1] = todo;

    this.setState({ todos: todos });
  }

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false })
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        let countTodo = this.state.countTodo;
        const todos = data.map(data => {
          const todo = Object.assign({}, data, { id: countTodo++, done: false });
          return todo;
        })
        this.setState({ todos: todos, countTodo: countTodo })
      })
      .catch(() => this.setState({ hasError: true }))
  }

  componentDidMount() {
      this.fetchData('data.json');
  }

  render() {
    return (
      <div className="App">
        <h1>todoアプリ作ってみた</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          isLoading={this.state.isLoading}
          hasError={this.state.hasError}
        />
      </div>
    );
  }
}

export default App;
