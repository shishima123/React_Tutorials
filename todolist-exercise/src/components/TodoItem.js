import React, { Component } from "react";
import "./TodoItem.css";
import checked from '../img/checked.svg';
import unCheck from '../img/uncheck.svg';
import unTick from '../img/untick.png'

class TodoItem extends Component {
    render() {
        const { todoItem, onClickDone, onClickDelete, sortItem } = this.props;
        let urlImg = unCheck;
        let className = "TodoItem d-flex";
        if (todoItem.isComplete) {
            urlImg = checked;
            className += " line-thought";
        }
        console.log(sortItem.type)
        if (sortItem.type === 'Active') {
            if (todoItem.isComplete === false) {
                return (
                    <div className={className}>
                        <img onClick={onClickDone} src={urlImg} alt={unCheck} className="img-size mr-3" />
                        <div className="d-flex justify-content-between w-100">
                            <p>{todoItem.name}</p>
                            <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                        </div>
                    </div>
                );
            } else {
                return (null);
            }
        } else if (sortItem.type === 'Complete') {
            if (todoItem.isComplete === true) {
                return (
                    <div className={className}>
                        <img onClick={onClickDone} src={urlImg} alt={unCheck} className="img-size mr-3" />
                        <div className="d-flex justify-content-between w-100">
                            <p>{todoItem.name}</p>
                            <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                        </div>
                    </div>
                );
            } else {
                return (null);
            }
        } else {
            return (
                <div className={className}>
                    <img onClick={onClickDone} src={urlImg} alt={unCheck} className="img-size mr-3" />
                    <div className="d-flex justify-content-between w-100">
                        <p>{todoItem.name}</p>
                        <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                    </div>
                </div>
            );
        }
    }
}

export default TodoItem;
