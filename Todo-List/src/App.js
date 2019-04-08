import React, { Component } from 'react'
import './App.css'
import './components/TodoItem'
import TodoItem from './components/TodoItem'

class App extends Component {
    constructor() {
        super()
        this.state = {
            TodoItems: [
                { title: 'Go shopping', isComplete: true },
                { title: 'Go swimming', isComplete: false },
                { title: 'Go home', isComplete: false }
            ]
        }
    }

    onItemClick(item) {
        return () => {
            console.log(item);
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

    render() {
        if (this.state.TodoItems.length) {
            return (
                < div className='App' >
                    {this.state.TodoItems.map((item, index) =>
                        <TodoItem
                            key={index}
                            item={item}
                            onClick={this.onItemClick(item)} />
                    )}
                </div >
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
