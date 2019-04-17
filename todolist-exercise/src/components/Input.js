import React, { Component } from 'react';


class Input extends Component {
    render() {
        const { onKeyUp, value, onChange } = this.props;
        return (
            <input
                placeholder="What need to be done?"
                className="border-bottom border-0 ml-3"
                onKeyUp={onKeyUp}
                value={value}
                onChange={onChange}
            />
        );
    }
}

export default Input;
