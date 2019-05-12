import React, { Component } from 'react';

class LeftSideBar extends Component {
    render() {
        const { feature, index, onClickFeature } = this.props;
        let classNames = "nav-link text-muted font-weight-bold";
        if (feature.isActive) {
            classNames = classNames.replace("text-muted", feature.textColor);
        }
        return (
            <li className="nav-item">
                <a className={classNames}
                    href="#/Random-string"
                    key={index}
                    onClick={onClickFeature}>{feature.name}</a>
            </li>
        )
    }
}

export default LeftSideBar;
