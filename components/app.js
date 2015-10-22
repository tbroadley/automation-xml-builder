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
  clearAll,
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

import { toObject, toXML } from '../parser/parser';

class App extends React.Component {
  render() {
    const {
      dispatch,
      jobName,
      jobDescription,
      jobSettings,
      jobSchedule,
      jobWorkflows,
    } = this.props;

    function d(actionCreator) {
      return (...args) => dispatch(actionCreator(...args));
    }

    return (
      <div id='app-root'>
        <AppSettings
          onFileUpload={xml => dispatch(uploadFile(toObject(xml,
            err => alert('Error uploading XML:\r\n' + err.message)
          )))}
          onClearAll={d(clearAll)}
          downloadXML={toXML(this.props)}
          jobName={jobName}
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
          scheduleType={jobSchedule.type}
          onSetScheduleType={d(setJobScheduleType)}
          scheduleOneTimeDate={jobSchedule.oneTimeDate}
          onOneTimeDateChange={d(setJobScheduleOneTimeDate)}
          scheduleDailyTime={jobSchedule.dailyTime}
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

// Connect the React top-level component to the Redux store.
export default connect(x => x)(App);
