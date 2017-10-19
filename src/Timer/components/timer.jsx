import React from 'react';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerDisplay from '../../TimerDisplay/components/TimerDisplay';
import TimerBtn from '../../TimerBtn/components/TimerBtn';
import TimerConfig from '../../TimerConfig/components/TimerConfig';


const Timer = () => (
  <div className="container-fluid">
    <TimerHeader />
    <TimerDisplay />
    <TimerBtn />
    <TimerConfig />
  </div>
);

export default Timer;
