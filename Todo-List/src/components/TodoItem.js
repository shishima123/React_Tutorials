import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checked from '../img/checked.svg';
import uncheck from '../img/uncheck.svg';
class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = uncheck;
        if (item.isComplete) {
            url = checked;
        }

        return (
            <div className={classNames('TodoItem', {
                'TodoItem_Complete': item.isComplete
            })}>
                <img onClick={onClick} src={url} alt={"logo"} className="imgSize" />
                <p>
                    {item.title}
                </p>
            </div>
        );
    }
}

export default TodoItem;
