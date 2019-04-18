import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import TodoItem from './components/TodoItem';
import ImgTick from './components/ImgTick';
import Input from './components/Input';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItem: [
        { 'name': "Study React", 'isComplete': false },
        { 'name': "Do workout ", 'isComplete': true }
      ],
      ImgTick: false
    }
    this.onClicked = this.onClicked.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickTickAll = this.onClickTickAll.bind(this);
  }

  onClicked(item) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItem } = this.state;
      const index = todoItem.indexOf(item);
      this.setState({
        todoItem: [
          ...todoItem.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...todoItem.slice(index + 1)
        ]
      })
    };
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      let txtInput = e.target.value.trim();
      if (txtInput === '' || txtInput === null || txtInput === undefined) {
        return;
      }
      this.setState({
        newItem: '',
        todoItem: [
          { name: txtInput, isComplete: false },
          ...this.state.todoItem
        ]
      });
    }
  }

  onChange(e) {
    let txtInput = e.target.value;
    this.setState({
      newItem: txtInput,
    })
  }

  onClickTickAll() {
    const { todoItem, ImgTick } = this.state;
    let state = todoItem;
    state.map((item) => item.isComplete = !ImgTick);
    this.setState({
      todoItem: state,
      ImgTick: !ImgTick
    });
  }

  render() {
    let countItemSelected = this.state.todoItem.reduce((accum, item) =>
      item.isComplete ? accum : accum + 1
      , 0);
    return (
      <div className="App">
        <div className="container">
          <div className="col-12 text-center">
            <h1 className="text-muted">Todos</h1>
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="col-6 border">
            <div className="input border-bottom py-2">
              <ImgTick ImgTick={this.state.ImgTick} onClick={this.onClickTickAll} countItemSelected={countItemSelected} />
              <Input onKeyUp={this.onKeyUp} value={this.state.newItem} onChange={this.onChange} />
            </div>
            <div className="TodoItems mt-2">
              {this.state.todoItem.map((item, index) =>
                <TodoItem
                  onClick={this.onClicked(item)}
                  key={index}
                  todoItem={item} />
              )}
            </div>
            <Footer countItemSelected={countItemSelected} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
