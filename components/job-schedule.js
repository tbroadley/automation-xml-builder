import React from 'react';

import { ScheduleTypes } from '../actions/actions';

class DateSetter extends React.Component {
  render() {
    const date = this.props.date;

    return (
      <div>
        <div>
          <input type='text' value={date.getFullYear()} />
          -
          <input type='text' value={date.getMonth()} />
          -
          <input type='text' value={date.getDate()} />
        </div>
        <div>
          <input type='text' value={date.getHours()} />
          :
          <input type='text' value={date.getMinutes()} />
          :
          <input type='text' value={date.getSeconds()} />
        </div>
      </div>
    );
  }
}

export default class AppSettings extends React.Component {
  render() {
    let isOneTime = this.props.scheduleType === ScheduleTypes.ONE_TIME;

    return (
      <div>
        <h2>
          Execution Type
        </h2>
        <div>
          <input
            type='radio'
            checked={isOneTime}
            onChange={() => this.props.onSetScheduleType(ScheduleTypes.ONE_TIME)}
          />
          One-Time
          <DateSetter date={this.props.scheduleOneTimeDate} />
        </div>
        <div>
          <input
            type='radio'
            checked={!isOneTime}
            onChange={() => this.props.onSetScheduleType(ScheduleTypes.DAILY)}
          />
          Daily
        </div>
      </div>
    );
  }
}
