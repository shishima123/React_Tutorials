import React, { Component } from 'react';
import './TodoItem.css';

class Footer extends Component {
    render() {
        const { countItemSelected } = this.props;
        return (
            <div className="Footer d-flex">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link small">{countItemSelected} Item Left</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#/All">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/Active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/Complete">Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;
