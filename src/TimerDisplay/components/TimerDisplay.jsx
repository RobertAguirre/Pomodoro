import React from 'react';

const leftpad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => (
  <div className="row">
    <h2 className="text-center">
      {`${leftpad(props.currentTime.get('hours'))}:${leftpad(props.currentTime.get('minutes'))}:${leftpad(props.currentTime.get('seconds'))}`}
    </h2>
  </div>
);

export default TimerDisplay;
