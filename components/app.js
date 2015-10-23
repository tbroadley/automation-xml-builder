import React from 'react';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobDescription from './job-description'
import JobSettings from './job-settings';
import JobSchedule from './job-schedule';
import JobWorkflows from './job-workflows';

export default class App extends React.Component {
  render() {
    return (
      <div id='app-root'>
        <AppSettings />
        <JobName />
        <JobDescription />
        <JobSchedule />
        <JobSettings />
        <JobWorkflows />
      </div>
    );
  }
}
