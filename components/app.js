import React from 'react';
import { connect } from 'react-redux';

import AppSettings from './app-settings';
import JobName from './job-name';
import JobDescription from './job-description'
import JobSettings from './job-settings';
import JobSchedule from './job-schedule';
import JobWorkflows from './job-workflows';

import {
  uploadFile,
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
  addActivity,
  removeActivity,
  changeActivityName,
  addArgument,
  removeArgument,
  changeArgumentName,
  changeArgumentValue,
} from "../actions/action-creators";

import { toObject } from '../parser/parser';

class App extends React.Component {
  render() {
    const {
      dispatch,
      jobName,
      jobDescription,
      jobSettings,
      schedule,
      jobWorkflows,
    } = this.props;

    function d(actionCreator) {
      return (...args) => dispatch(actionCreator(...args));
    }

    return (
      <div>
        <AppSettings
          onFileUpload={xml => dispatch(uploadFile(toObject(xml)))}
        />
        <JobName
          name={jobName}
          onSetJobName={d(setJobName)}
        />
        <JobDescription
          description={jobDescription}
          onSetJobDescription={d(setJobDescription)}
        />
        <JobSchedule
          scheduleType={schedule.type}
          onSetScheduleType={d(setJobScheduleType)}
          scheduleOneTimeDate={schedule.oneTimeDate}
          onOneTimeDateChange={d(setJobScheduleOneTimeDate)}
          scheduleDailyTime={schedule.dailyTime}
          onDailyTimeChange={d(setJobScheduleDailyTime)}
        />
        <JobSettings
          settings={jobSettings}
          onAddSetting={d(addSetting)}
          onRemoveSetting={d(removeSetting)}
          onChangeSettingName={d(changeSettingName)}
          onChangeSettingValue={d(changeSettingValue)}
        />
        <JobWorkflows
            workflows={jobWorkflows}
            onAddWorkflow={d(addWorkflow)}
            onRemoveWorkflow={d(removeWorkflow)}
            onChangeWorkflowName={d(changeWorkflowName)}
            onAddActivity={d(addActivity)}
            onRemoveActivity={d(removeActivity)}
            onChangeActivityName={d(changeActivityName)}
            onAddArgument={d(addArgument)}
            onRemoveArgument={d(removeArgument)}
            onChangeArgumentName={d(changeArgumentName)}
            onChangeArgumentValue={d(changeArgumentValue)}
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
    jobWorkflows: state.jobWorkflows,
  };
}

// Connect the React top-level component to the Redux store.
export default connect(select)(App);
