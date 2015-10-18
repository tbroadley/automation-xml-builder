import React from 'react';

import { ScheduleTypes } from '../actions/actions';

export default class AppSettings extends React.Component {
  render() {
    let isOneTime = this.props.scheduleType === ScheduleTypes.ONE_TIME;

    return (
      <div>
        <h2>
          Execution Type
        </h2>
        <input
          type='radio'
          checked={isOneTime}
          onChange={() => this.props.onSetScheduleType(ScheduleTypes.ONE_TIME)}
        />
        One-Time
        <br />
        <input
          type='radio'
          checked={!isOneTime}
          onChange={() => this.props.onSetScheduleType(ScheduleTypes.DAILY)}
        />
        Daily
      </div>
    );
  }
}
