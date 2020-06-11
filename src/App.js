import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";
import Search from "./components/search";

class App extends Component {
  state = {
    task: "",
    todos: [],
    flag: true,
    searchQuery: "",
    filter: [],
  };

  onChangeHandler = (e) => {
    this.setState({ task: e.target.value });
  };
  onChange = (query) => {
    this.setState({ searchQuery: query });
  };
  addTodo = (e) => {
    e.preventDefault();
    const todos = this.state.todos;
    todos.push({
      id: Math.random(),
      task: this.state.task,
      isCompleted: false,
    });
    this.setState({ task: "", todos });
    //console.log(this.state.todos);
  };
  removeTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };
  updateTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === id);
    const todos = this.state.todos;
    todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted ? true : false;
    this.setState({ todos });
  };
  clearTodo = () => {
    const todos = [];
    this.setState({ todos });
  };
  getSearch = () => {
    const alltodo = this.state.todos;
    let filters = alltodo;
    if (this.state.searchQuery) {
      filters = alltodo.filter((todo) =>
        todo.task.toLowerCase().startsWith(this.state.searchQuery.toLowerCase())
      );
    } else {
      return filters;
    }
    return filters;
  };
  /*handleTurn = (flag) => {
    flag = !flag ? true : false;
    this.setState({ flag });
  };
  testTest = () => {
    alert("clicked");
  };*/

  render() {
    const filters = this.getSearch();
    return (
      <div>
        {/*<Turn handleTurn={this.handleTurn} flag={this.state.flag} />*/}
        <Header clearTodo={this.clearTodo} />

        <div className="TodoContainer">
          <Search value={this.state.searchQuery} onChange={this.onChange} />
          {filters.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
              />
            );
          })}
          <AddTodo
            task={this.state.task}
            onChangeHandler={this.onChangeHandler}
            addTodo={this.addTodo}
          />
        </div>
        <div className="itemCount">
          still have {this.state.todos.length} task(s) to do
        </div>
      </div>
    );
  }
}

export default App;
