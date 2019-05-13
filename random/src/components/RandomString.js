import React, { Component } from 'react';
import './component.css';

class RandomString extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-5 text-right">
                    <div className="input-group mb-3 input__width">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Prefix</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                        <div className="input-group-append">
                            <span className="input-group-text">0</span>
                        </div>
                    </div>

                    <div className="input-group mb-3 input__width">
                        <div className="input-group-prepend">
                            <span className="input-group-text">From</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                    </div>

                    <div className="input-group mb-3 input__width">
                        <div className="input-group-prepend">
                            <span className="input-group-text">&nbsp;&nbsp;To&nbsp;&nbsp;</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                    </div>

                    <div className="form-group d-flex input__width">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Type</label>
                        </div>
                        <select className="form-control">
                            <option>Random</option>
                            <option>Order List</option>
                        </select>
                    </div>

                    <div className="input-group mb-3 input__width">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Quantity</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                    </div>

                    <div className="pr-5">
                        <button type="button" className="btn btn-primary">Random</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default RandomString;