import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
	constructor(props) {
		super(props);
	}

	removeTodo(id) {
		this.props.removeTodo(id);
	}

	render() {
		return (
			<div className="todoWrapper">
				<button
					className="removeTodo"
					onClick={() => this.removeTodo(this.props.id)}
				>
					remove
				</button>
				{this.props.todo.text}
			</div>
		);
	}
}
