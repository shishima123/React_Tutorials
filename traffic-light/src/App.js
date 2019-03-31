import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/traffic-light';

const RED = "RED";
const ORANGE = "ORANGE";
const GREEN = "GREEN";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: RED
        }
        setInterval(
            () => {
                console.log(this.state.currentColor);
                this.setState({
                    currentColor: this.getNextColor(this.state.currentColor)
                })
            }, 2000);
    }

    getNextColor(color) {
        switch (color) {
            case "RED":
                return ORANGE;
            case "ORANGE":
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        return (
            <div className="App">
                <TrafficLight currentColor={this.state.currentColor} />
            </div>
        );
    }
}

export default App;
