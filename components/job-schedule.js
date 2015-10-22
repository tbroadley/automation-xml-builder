import React from 'react';

import pureRender from 'pure-render-decorator';

import { ScheduleTypes } from '../actions/actions';

import FastInput from './fast-input';

@pureRender
class DateTimeInput extends React.Component {
  render() {
    return (
      <FastInput
        value={this.props.getter.call(this.props.date)}
        onChange={value => this.handleChange(value)}
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

@pureRender
class DateSetter extends React.Component {
  render() {
    let d = Date.prototype;

    return (
      <div>
        {this.makeDateTimeInput(d.getFullYear, d.setFullYear)}
        -
        {this.makeDateTimeInput(
          function() {
            return this.getMonth() + 1;
          },
          function(x) {
            this.setMonth(x - 1);
          })}
        -
        {this.makeDateTimeInput(d.getDate, d.setDate)}
      </div>
    );
  }

  makeDateTimeInput(getter, setter) {
    return (
      <DateTimeInput
        date={this.props.date}
        getter={getter}
        setter={setter}
        handleChange={this.props.onDateChange}
      />
    );
  }
}

@pureRender
class TimeSetter extends React.Component {
  render() {
    let d = Date.prototype;

    return (
      <div>
        {this.makeDateTimeInput(d.getHours, d.setHours)}
        :
        {this.makeDateTimeInput(d.getMinutes, d.setMinutes)}
        :
        {this.makeDateTimeInput(d.getSeconds, d.setSeconds)}
      </div>
    );
  }

  makeDateTimeInput(getter, setter) {
    return (
      <DateTimeInput
        date={this.props.time}
        getter={getter}
        setter={setter}
        handleChange={this.props.onTimeChange}
      />
    );
  }
}

@pureRender
export default class JobSchedule extends React.Component {
  render() {
    let isOneTime = this.props.scheduleType === ScheduleTypes.ONE_TIME;

    return (
      <div>
        <h2>
          Execution Type
        </h2>
        <div>
          <FastInput
            type='radio'
            checked={isOneTime}
            onChange={() => this.props.onSetScheduleType(ScheduleTypes.ONE_TIME)}
          />
          One-Time
          <br />
          <FastInput
            type='radio'
            checked={!isOneTime}
            onChange={() => this.props.onSetScheduleType(ScheduleTypes.DAILY)}
          />
          Daily
        </div>
        <div style={{ display: isOneTime ? '' : 'none' }}>
          <DateSetter
            date={this.props.scheduleOneTimeDate}
            onDateChange={this.props.onOneTimeDateChange}
          />
          <TimeSetter
            time={this.props.scheduleOneTimeDate}
            onTimeChange={this.props.onOneTimeDateChange}
          />
        </div>
        <div style={{ display: isOneTime ? 'none' : '' }}>
          <TimeSetter
            time={this.props.scheduleDailyTime}
            onTimeChange={this.props.onDailyTimeChange}
          />
        </div>
      </div>
    );
  }
}
