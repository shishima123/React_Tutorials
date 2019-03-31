import React, { Component } from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';

class App extends Component {
	constructor() {
		super();
		this.Items = [
			{ title: 'Go shopping', isComplete: true },
			{ title: 'Go swimming', isComplete: false },
			{ title: 'Go home', isComplete: false }
		];
	}
	render() {
		return <div className="App">{this.Items.map((item, index) => <TodoItem key={index} item={item} />)}</div>;
	}
}

export default App;
