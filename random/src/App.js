import React, { Component } from 'react';
import Header from './components/Header';
import LeftSideBar from './components/LeftsideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feature: [
        { "name": "Random String", "isActive": true, "bgColor": "bg-primary", "textColor": "text-primary" },
        { "name": "Random Y/M/D", "isActive": false, "bgColor": "bg-success", "textColor": "text-success" }
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
      <div className="App">
        <Header feature={this.state.feature} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 sidebar__height">
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
          </div>
        </div>

      </div>
    )
  }
}

export default App;
