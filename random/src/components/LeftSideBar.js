import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LeftSideBar extends Component {
    render() {
        const { feature, index, onClickFeature } = this.props;
        let classOfA = "nav-link text-muted text-center font-weight-bold";
        let classOfLi = "nav-item ";
        let href = feature.name.replace(' ', '');
        if (feature.isActive) {
            classOfA = classOfA.replace("text-muted", "text-light");
            classOfLi += feature.bgColor;
        }
        return (
            <li className={classOfLi}>
                <Link className={classOfA}
                    to={href}
                    key={index}
                    onClick={onClickFeature}>{feature.name}</Link>
            </li>
        )
    }
}

export default LeftSideBar;
