import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
        <div className="panel-body">
          <div className="container-fluid">
            <div className="row">
              <h1 className="text-center">Pomodoro Application</h1>
            </div>

            <div className="row">
              <h2 className="text-center">00:00:00</h2>
            </div>

            <div className="row text-center">
              <div className="btn btn-success btn-lg">Start</div>
            </div>

            <div className="row">
              <h3 className="text-primary">Set Timer</h3>

              <div className="row control-row">
                <div className="form-group">
                  <div className="col-sm-2">
                    <label htmlFor="hours">Hours</label>
                  </div>
                  <div className="col-sm-10">
                    <input id="hours" type="number" className="form-control"/>
                  </div>
                </div>
              </div>

              <div className="row control-row">
                <div className="form-group">
                  <div className="col-sm-2">
                    <label htmlFor="minutes">Minutes</label>
                  </div>
                  <div className="col-sm-10">
                    <input id="minutes" type="number" className="form-control"/>
                  </div>
                </div>
              </div>

              <div className="row control-row">
                <div className="form-group">
                  <div className="col-sm-2">
                    <label htmlFor="seconds">Seconds</label>
                  </div>
                  <div className="col-sm-10">
                    <input id="seconds" type="number" className="form-control"/>
                  </div>
                </div>
              </div>

            </div> {/* row close */}
          </div> {/* contrainer close */}
        </div> {/* panel-body close */}
      </div> /* panel close */
    );
  }
}

export default App;
