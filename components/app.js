import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

class App extends React.Component {
  render() {
    const { dispatch, automationName } = this.props;
    return (
      <div>
        <AppSettings />
        <JobName
          name={automationName}
        />
        <JobSchedule />
        <JobAttributes />
      </div>
    );
  }
}

function select(state) {
  return {
    automationName: state.automationName,
  };
}

export default connect(select)(App);
