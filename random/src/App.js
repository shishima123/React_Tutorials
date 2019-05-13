import React, { Component } from 'react';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RandomYmd from './components/RandomYmd';
import RandomString from './components/RandomString';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      feature: [
        { "name": "Random String", "isActive": true, "bgColor": "bg-primary", "textColor": "text-primary" },
        { "name": "Random Ymd", "isActive": false, "bgColor": "bg-success", "textColor": "text-success" }
      ]
    }
    this.onClickFeature = this.onClickFeature.bind(this);
  }

  onClickFeature(item) {
    return () => {
      const { feature } = this.state;
      const index = feature.indexOf(item);
      let state = feature;
      state.map((item) => item.isActive = false)
      state[index].isActive = true;
      this.setState({
        feature: feature
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {
            this.state.feature.filter((item) => item.isActive === true).map((item, index) => <Header feature={item} key={index} />)
          }

          <div className="container-fluid">
            <div className="row">
              <div className="col-2 sidebar__height px-0">
                <ul className="nav flex-column">
                  {this.state.feature.map((item, index) =>
                    <LeftSideBar
                      feature={item}
                      key={index}
                      onClickFeature={this.onClickFeature(item)}
                    />
                  )}
                </ul>
              </div>
              <div className="col-10 mt-5">
                <Route path="/RandomYmd" component={RandomYmd} />
                <Route path="/RandomString" component={RandomString} />
              </div>
            </div>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;
