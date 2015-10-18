import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

import { setJobName } from "../actions/action-creators";

class App extends React.Component {
  render() {
    const { dispatch, jobName } = this.props;
    return (
      <div>
        <AppSettings />
        <JobName
          name={jobName}
          onSetJobName={name => dispatch(setJobName(name))}
        />
        <JobSchedule />
        <JobAttributes />
      </div>
    );
  }
}

function select(state) {
  return {
    jobName: state.jobName,
  };
}

export default connect(select)(App);
