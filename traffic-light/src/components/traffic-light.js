import React, { Component } from 'react';
import "./TrafficLight.css";
import classNames from 'classnames';

class TrafficLight extends Component {
    render() {
        console.log(this.props);
        const { currentColor } = this.props;
        return (
            < div className="TrafficLight" >
                <div className={
                    classNames('bulb', 'red', {
                        active: currentColor === "RED"
                    })
                }></div>
                <div className={
                    classNames('bulb', 'orange', {
                        active: currentColor === "ORANGE"
                    })
                }></div>
                <div className={
                    classNames('bulb', 'green', {
                        active: currentColor === "GREEN"
                    })
                }></div>
            </div >
        );
    }
}

export default TrafficLight;
