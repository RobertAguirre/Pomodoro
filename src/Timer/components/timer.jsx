import React, { Component } from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerBtn from '../../TimerBtn/components/TimerBtn';
import TimerConfig from '../../TimerConfig/components/TimerConfig';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
    };
  }

  render()
  {
    return (
      <div className="container-fluid">
        <TimerHeader />
        <TimerDisplay currentTime={this.state.currentTime} />
        <TimerBtn />
        <TimerConfig baseTime={this.state.baseTime} />
      </div>
    );
  }
}

export default Timer;
