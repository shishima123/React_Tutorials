import React, { Component } from 'react'
import './App.css'
import './components/TodoItem'
import TodoItem from './components/TodoItem'

class App extends Component {
    constructor() {
        super()
        this.TodoItems = [
            { title: 'Go shopping', isComplete: true },
            { title: 'Go swimming', isComplete: false },
            { title: 'Go home', isComplete: false }
        ]
    }

    // Option 2:
    render() {
        return (
            <div className='App'>
                {this.TodoItems.length > 0 && this.TodoItems.map((item, index) => (
                    <TodoItem key={index} item={item} />
                ))}
                {
                    this.TodoItems.length === 0 && "Nothing Here!"
                }
            </div>
        );
    }

    // Option 2:
    /* render() {
        if (this.Items.length > 0) {
            return (
                <div className='App'>
                    {this.Items.map((item, index) => (
                        <TodoItem key={index} item={item} />
                    ))}
                </div>
            );
                    {this.Items.map((item, index) => (
                        <TodoItem key={index} item={item} />
                    ))}
                </div>
            );
        } else {
            return (<div className='App'>Nothings Here.</div>)
        }
    }*/
}

export default App
