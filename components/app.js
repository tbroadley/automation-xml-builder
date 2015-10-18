import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

import { setJobName, setJobScheduleType } from "../actions/action-creators";

class App extends React.Component {
  render() {
    const { dispatch, jobName, scheduleType } = this.props;
    return (
      <div>
        <AppSettings />
        <JobName
          name={jobName}
          onSetJobName={name => dispatch(setJobName(name))}
        />
        <JobSchedule
          scheduleType={scheduleType}
          onSetScheduleType={type => dispatch(setJobScheduleType(type))}
        />
        <JobAttributes />
      </div>
    );
  }
}

function select(state) {
  return {
    jobName: state.jobName,
    scheduleType: state.jobSchedule.type,
  };
}

export default connect(select)(App);
