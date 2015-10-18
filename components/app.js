import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

import { setJobName, setJobScheduleType } from "../actions/action-creators";

class App extends React.Component {
  render() {
    const {
      dispatch,
      jobName,
      schedule
    } = this.props;

    return (
      <div>
        <AppSettings />
        <JobName
          name={jobName}
          onSetJobName={name => dispatch(setJobName(name))}
        />
        <JobSchedule
          scheduleType={schedule.type}
          onSetScheduleType={type => dispatch(setJobScheduleType(type))}
          scheduleOneTimeDate={schedule.oneTimeDate}
        />
        <JobAttributes />
      </div>
    );
  }
}

function select(state) {
  return {
    jobName: state.jobName,
    schedule: {
      type: state.jobSchedule.type,
      oneTimeDate: state.jobSchedule.oneTimeDate,
    }
  };
}

export default connect(select)(App);
