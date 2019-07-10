import React, { Component } from "react";
import "./TodoItem.css";
import checked from '../img/checked.svg';
import unCheck from '../img/uncheck.svg';
import unTick from '../img/untick.png'

class TodoItem extends Component {
    render() {
        const { todoItem, onClickDone, onClickDelete, sortItem } = this.props;
        let urlImg = unCheck;
        let todoItemNameClass = "";
        let todoItemImgClass = "img-size mr-3 ";
        if (todoItem.isComplete) {
            urlImg = checked;
            todoItemNameClass = "line-thought";
            todoItemImgClass += "line-thought";
        }

        let newSortItem = sortItem.filter((item) => item.isActive === true);
        let typeSort = newSortItem[0].type;
        if (typeSort === 'Active') {
            if (todoItem.isComplete === false) {
                return (
                    <div className="TodoItem d-flex">
                        <img onClick={onClickDone} src={urlImg} alt={unCheck} className={todoItemImgClass} />
                        <div className="d-flex justify-content-between w-100">
                            <p className={todoItemNameClass}>{todoItem.name}</p>
                            <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                        </div>
                    </div>
                );
            } else {
                return (null);
            }
        } else if (typeSort === 'Complete') {
            if (todoItem.isComplete === true) {
                return (
                    <div className="TodoItem d-flex">
                        <img onClick={onClickDone} src={urlImg} alt={unCheck} className={todoItemImgClass} />
                        <div className="d-flex justify-content-between w-100">
                            <p className={todoItemNameClass}>{todoItem.name}</p>
                            <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                        </div>
                    </div>
                );
            } else {
                return (null);
            }
        } else {
            return (
                <div className="TodoItem d-flex" >
                    <img onClick={onClickDone} src={urlImg} alt={unCheck} className={todoItemImgClass} />
                    <div className="d-flex justify-content-between w-100">
                        <p className={todoItemNameClass}>{todoItem.name}</p>
                        <img onClick={onClickDelete} src={unTick} alt={unCheck} className="img-size mr-3 no-opacity" />
                    </div>
                </div >
            );
        }
    }
}

export default TodoItem;
