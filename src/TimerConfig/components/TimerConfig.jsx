import React from 'react';

const TimerConfig = (props) => (
  <div className="row">
    <h3 className="text-primary">Set Timer</h3>

    <div className="row control-row">
      <div className="form-group">
        <div className="col-sm-2">
          <label htmlFor="hours">Hours</label>
        </div>
        <div className="col-sm-10">
          <input id="hours" type="number" className="form-control" defaultValue={props.baseTime.get('hours')} />
        </div>
      </div>
    </div>

    <div className="row control-row">
      <div className="form-group">
        <div className="col-sm-2">
          <label htmlFor="minutes">Minutes</label>
        </div>
        <div className="col-sm-10">
          <input id="minutes" type="number" className="form-control" defaultValue={props.baseTime.get('minutes')} />
        </div>
      </div>
    </div>

    <div className="row control-row">
      <div className="form-group">
        <div className="col-sm-2">
          <label htmlFor="seconds">Seconds</label>
        </div>
        <div className="col-sm-10">
          <input id="seconds" type="number" className="form-control" defaultValue={props.baseTime.get('seconds')} />
        </div>
      </div>
    </div>

  </div>
);

export default TimerConfig;
