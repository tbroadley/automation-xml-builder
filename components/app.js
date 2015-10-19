import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobDescription from './job-description'
import JobSettings from './job-settings';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

import {
  setJobName,
  setJobDescription,
  setJobScheduleType,
  setJobScheduleOneTimeDate
} from "../actions/action-creators";

class App extends React.Component {
  render() {
    const {
      dispatch,
      jobName,
      jobDescription,
      schedule,
    } = this.props;

    return (
      <div>
        <AppSettings />
        <JobName
          name={jobName}
          onSetJobName={name => dispatch(setJobName(name))}
        />
        <JobDescription
          description={jobDescription}
          onSetJobDescription={desc => dispatch(setJobDescription(desc))}
        />
        <JobSettings />
        <JobSchedule
          scheduleType={schedule.type}
          onSetScheduleType={type => dispatch(setJobScheduleType(type))}
          scheduleOneTimeDate={schedule.oneTimeDate}
          onOneTimeDateChange={date =>
            dispatch(setJobScheduleOneTimeDate(date))}
        />
        <JobAttributes />
      </div>
    );
  }
}

// This function takes the state in the Redux store and turns it into a set of
// props for the top-level React component.
function select(state) {
  return {
    jobName: state.jobName,
    jobDescription: state.jobDescription,
    schedule: {
      type: state.jobSchedule.type,
      oneTimeDate: state.jobSchedule.oneTimeDate,
    }
  };
}

// Connect the React top-level component to the Redux store.
export default connect(select)(App);
