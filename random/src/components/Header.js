import React, { Component } from "react";
import "./component.css";

class Header extends Component {
    render() {
        const { feature } = this.props;
        let className = "container-fluid header-height "
        let headerName;
        for (let x in feature) {
            if (feature[x].isActive === true) {
                headerName = feature[x].name;
                className += feature[x].bgColor;
                break;
            }
        }
        return (
            <div className={className}>
                <div className="row w-100 h-100 mx-0">
                    <div className="col-2 text-center d-flex align-items-center">
                        <h4>Tool Random</h4>
                    </div>
                    <div className="col-10 d-flex justify-content-center align-items-center">
                        <h4>{headerName}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;