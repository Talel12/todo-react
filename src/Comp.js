import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: []
    };
  }

  add = e => {
    this.setState({
      todos: this.state.todos.concat({
        text: this.state.input,
        completed: false,
        id: Math.floor(Math.random() * 1000000000)
      }),
      input: ""
    });
  };

  change = e => {
    this.setState({
      input: e.target.value
    });
  };

  complet = id => {
    this.setState({
      todos: this.state.todos.map(el =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    });
  };
  delete = id => {
    this.setState({
      todos: this.state.todos.filter(el => el.id !== id)
    });
  };

  render() {
    return (
        <div>
      <div className="sect">
        <div class="container">
          <h1 id="h1">TO-DO APP!</h1>
          <h3 id="h3">Add new Todo</h3>
          <input
            value={this.state.input}
            type="text"
            class="text"
            placeholder="Enter new task"
            onChange={this.change}
          />
          <button class="button" onClick={this.add}>
            Add
          </button>
        </div></div>
        <div className="marg">
          {this.state.todos.map(el => {
            return (
              <div className="list-item">
                <h2 className={el.completed ? "cmp todoText" : "todoText"}>{el.text}</h2>
                <button className="btncom" onClick={() => this.complet(el.id)}>
                  {el.completed ? "undo" : "Complete"}
                </button>
                <button className="btncom" onClick={() => this.delete(el.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Section;
