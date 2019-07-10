import React, { Component } from 'react';
import './TodoItem.css';

class Footer extends Component {
    render() {
        const { onClickSortBy, sortItem, index } = this.props;
        let className = "nav-link";
        if (sortItem.isActive) {
            className += " active";
        }

        return (
            <li key={index} className="nav-item" onClick={onClickSortBy}>
                <a className={className} href="#/All">{sortItem.type}</a>
            </li>
        );
    }
}

export default Footer;
