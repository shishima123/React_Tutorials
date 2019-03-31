import React, { Component } from "react";
import "./App.css";
import "./components/TodoItem";
import TodoItem from "./components/TodoItem";

class App extends Component {
    constructor() {
        super();
        this.Items = [
            "Go shopping",
            "Go swimming",
            "Go home"
        ];
    }
    render() {
        return (
            <div className="App">
            {
                this.Items.map(
                    (item, index) => <TodoItem key={index} title={item} />
                    )
            }
                
            </div>
        );
    }
}

export default App;
