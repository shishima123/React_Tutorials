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
      ImgTick: false,
      sortItem: [
        { 'type': 'All', isActive: true },
        { 'type': 'Active', isActive: false },
        { 'type': 'Complete', isActive: false }
      ]
    }
    this.onClickDone = this.onClickDone.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickTickAll = this.onClickTickAll.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickSortBy = this.onClickSortBy.bind(this);
  }

  onClickDone(item) {
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
      });
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

  onClickDelete(item) {
    return () => this.setState({
      todoItem: this.state.todoItem.filter((i) => i !== item)
    });
  }

  onClickSortBy(item) {
    // let txtTarget = e.currentTarget.textContent;
    // this.setState({
    //   sortItem: txtTarget
    // })
    return () => {
      const isActive = item.isActive;
      const { sortItem } = this.state;
      const index = sortItem.indexOf(item);
      this.setState({
        sortItem: [
          ...sortItem.slice(0, index),
          {
            ...item, isActive: !isActive
          },
          ...sortItem.slice(index + 1)
        ]
      });
    }
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
                  onClickDone={this.onClickDone(item)}
                  key={index}
                  todoItem={item}
                  onClickDelete={this.onClickDelete(item)}
                  sortItem={this.state.sortItem}
                />
              )}
            </div>
            <div className="Footer d-flex border-top">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <p className="nav-link small">{countItemSelected} Item Left</p>
                </li>
                {this.state.sortItem.map((item, index) =>
                  <Footer
                    key={index}
                    sortItem={item}
                    onClickSortBy={this.onClickSortBy(item)}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
