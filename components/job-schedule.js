import React from 'react';

import { ScheduleTypes } from '../actions/actions';

class DateInput extends React.Component {
  render() {
    return (
      <input
        type='text'
        value={this.props.getter.call(this.props.date)}
        onChange={e => this.handleChange(e.target.value)}
      />
    );
  }

  handleChange(value) {
    // The component's props should not be mutated. We create a new Date object
    // with the same time, so that we can mutate it.
    let copiedDate = new Date(this.props.date.getTime());
    this.props.setter.call(copiedDate, value);
    this.props.handleChange(copiedDate);
  }
}

class DateSetter extends React.Component {
  render() {
    let d = Date.prototype;

    return (
      <div>
        <div>
          {this.makeDateInput(d.getFullYear, d.setFullYear)}
          -
          {this.makeDateInput(d.getMonth, d.setMonth)}
          -
          {this.makeDateInput(d.getDate, d.setDate)}
        </div>
        <div>
          {this.makeDateInput(d.getHours, d.setHours)}
          :
          {this.makeDateInput(d.getMinutes, d.setMinutes)}
          :
          {this.makeDateInput(d.getSeconds, d.setSeconds)}
        </div>
      </div>
    );
  }

  makeDateInput(getter, setter) {
    return (
      <DateInput
        date={this.props.date}
        getter={getter}
        setter={setter}
        handleChange={this.props.onDateChange}
      />
    );
  }
}

export default class JobSchedule extends React.Component {
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
          <DateSetter
            date={this.props.scheduleOneTimeDate}
            onDateChange={this.props.onOneTimeDateChange}
          />
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
