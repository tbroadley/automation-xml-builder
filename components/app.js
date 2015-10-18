import React from 'react';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobSchedule from './job-schedule';
import JobAttributes from './job-attributes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppSettings />
        <JobName />
        <JobSchedule />
        <JobAttributes />
      </div>
    )
  }
}
