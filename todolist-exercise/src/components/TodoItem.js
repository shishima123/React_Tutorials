import React, { Component } from "react";
import "./TodoItem.css";
import checked from '../img/checked.svg';
import unCheck from '../img/uncheck.svg';
import unTick from '../img/untick.png'

class TodoItem extends Component {
    render() {
        const { todoItem, onClick } = this.props;
        let urlImg = unCheck;
        let className = "TodoItem d-flex"
        if (todoItem.isComplete) {
            urlImg = checked;
            className += " line-thought";
        }
        return (
            <div className={className}>
                <img onClick={onClick} src={urlImg} alt={unCheck} className="img-size mr-3" />
                <div className="d-flex justify-content-between w-100">
                    <p>{todoItem.name}</p>
                    <img onClick={onClick} src={unTick} alt={unCheck} className="img-size mr-3" />
                </div>
            </div>
        );
    }
}

export default TodoItem;
