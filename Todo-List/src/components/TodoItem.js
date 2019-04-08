import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                'TodoItem_Complete': item.isComplete
            })}>
                <p>
                    {item.title}
                </p>
            </div>
        );
    }
}

export default TodoItem;
