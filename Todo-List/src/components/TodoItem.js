import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return  (
            <div className="TodoItem">
                <p className="text-primary">{this.props.title}</p>
            </div>
        )
    }
}

export default TodoItem;