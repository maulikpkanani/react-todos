import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
	constructor(props) {
		super(props);

		// set the state with todos array
		this.state = {
			todos: [
				{ id: 0, text: 'Make dinner tonight' },
				{ id: 1, text: 'Fold the laundry' }
			],
			nextId: 3
		};

		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(todoText) {
		console.log(todoText);
		// slicing the the array so that it can be mutated immutabily
		let todos = this.state.todos.slice();
		todos.push({ id: this.state.nextId, text: todoText });

		//setting the state so that we can mutate the state
		this.setState({
			todos: todos,

			// increasing the nextId
			nextId: ++this.state.nextId
		});
	}

	removeTodo(id) {
		this.setState({
			todos: this.state.todos.filter((todo, index) => todo.id !== id)
		});
	}

	render() {
		return (
			<div className="App">
				<div className="todo-wrapper">
					{/*Header component*/}
					<Header />
					{/*Input todo*/}
					<TodoInput addTodo={this.addTodo} />

					{/*ordering the list*/}
					<ul>
						{/* */}
						{this.state.todos.map(todo => {
							return (
								<TodoItem
									todo={todo}
									key={todo.id}
									id={todo.id}
									removeTodo={this.removeTodo}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
