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
  setJobScheduleOneTimeDate,
  setJobScheduleDailyTime,
  addSetting,
  removeSetting,
  changeSettingName,
  changeSettingValue,
  addWorkflow,
  removeWorkflow,
  changeWorkflowName,
} from "../actions/action-creators";

class App extends React.Component {
  render() {
    const {
      dispatch,
      jobName,
      jobDescription,
      jobSettings,
      schedule,
      jobAttributes,
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
        <JobSchedule
          scheduleType={schedule.type}
          onSetScheduleType={type => dispatch(setJobScheduleType(type))}
          scheduleOneTimeDate={schedule.oneTimeDate}
          onOneTimeDateChange={date =>
            dispatch(setJobScheduleOneTimeDate(date))}
          scheduleDailyTime={schedule.dailyTime}
          onDailyTimeChange={time =>
            dispatch(setJobScheduleDailyTime(time))
          }
        />
        <JobSettings
          settings={jobSettings}
          onAddSetting={() => dispatch(addSetting())}
          onRemoveSetting={index => dispatch(removeSetting(index))}
          onChangeSettingName={(index, name) =>
            dispatch(changeSettingName(index, name))}
          onChangeSettingValue={(index, value) =>
            dispatch(changeSettingValue(index, value))}
        />
        <JobAttributes
          workflows={jobAttributes}
          onAddWorkflow={() => dispatch(addWorkflow())}
          onRemoveWorkflow={index => dispatch(removeWorkflow(index))}
          onChangeWorkflowName={(index, name) =>
            dispatch(changeWorkflowName(index, name))}
        />
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
    jobSettings: state.jobSettings,
    schedule: {
      type: state.jobSchedule.type,
      oneTimeDate: state.jobSchedule.oneTimeDate,
      dailyTime: state.jobSchedule.dailyTime,
    },
    jobAttributes: state.jobAttributes,
  };
}

// Connect the React top-level component to the Redux store.
export default connect(select)(App);
