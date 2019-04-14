import React, { Component } from 'react'
import './App.css'
import './components/TodoItem'
import TodoItem from './components/TodoItem'
import tick from './img/tick.svg'

class App extends Component {
    constructor() {
        super()
        this.state = {
            newItem: '',
            TodoItems: [
                { title: 'Go shopping', isComplete: true },
                { title: 'Go swimming', isComplete: false },
                { title: 'Go home', isComplete: false }
            ]
        }
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onItemClick(item) {
        return () => {
            const isComplete = item.isComplete;
            const { TodoItems } = this.state;
            const index = TodoItems.indexOf(item);
            this.setState({
                TodoItems: [
                    ...TodoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...TodoItems.slice(index + 1)
                ]
            });
        }
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            let txt = e.target.value.trim();
            if (!txt) {
                return;
            }

            this.setState({
                newItem: '',
                TodoItems: [
                    { title: txt, isComplete: false },
                    ...this.state.TodoItems
                ]
            })
        }

    }
    onChange(e) {
        this.setState({
            newItem: e.target.value
        })
    }

    render() {
        if (this.state.TodoItems.length) {
            return (
                <div className='App' >
                    <div className="Header">
                        <img src={tick} alt={tick} className="imgSize" />
                        <input
                            type="text"
                            placeholder="Add to new item"
                            value={this.state.newItem}
                            onChange={this.onChange}
                            onKeyUp={this.onKeyUp} />
                    </div>
                    {this.state.TodoItems.map((item, index) =>
                        <TodoItem
                            key={index}
                            item={item}
                            onClick={this.onItemClick(item)} />
                    )}
                </div>
            )
        } else {
            return (
                <div className='App'>
                    {this.TodoItems.length === 0 && "Nothing Here!"}
                </div>
            )
        }
    }
}

export default App
