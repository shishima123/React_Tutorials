import React, { Component } from 'react';
import tick from '../img/tick.png';
import unTick from '../img/untick.png';
import './TodoItem.css';

class ImgTick extends Component {
    render() {
        const { onClick, ImgTick, countItemSelected } = this.props;
        let imgSrc = tick;
        if (ImgTick || countItemSelected === 0) {
            imgSrc = unTick;
        }
        return (
            <img src={imgSrc} alt="tick" onClick={onClick} />
        );
    }
}

export default ImgTick;
