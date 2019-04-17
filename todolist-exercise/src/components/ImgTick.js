import React, { Component } from 'react';
import tick from '../img/tick.png';
import unTick from '../img/untick.png'

class ImgTick extends Component {
    render() {
        const { onClick, ImgTick } = this.props;
        let imgSrc = tick;
        if (ImgTick) {
            imgSrc = unTick;
        }
        return (
            <img src={imgSrc} alt="tick" onClick={onClick} />
        );
    }
}

export default ImgTick;
