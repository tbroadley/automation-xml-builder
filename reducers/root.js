import { combineReducers } from 'redux';

import { UPLOAD_FILE } from '../actions/actions';

import jobName from './job-name.js';
import jobDescription from './job-description'
import jobSchedule from './job-schedule.js';
import jobSettings from './job-settings';
import jobWorkflows from './job-workflows';

const rootNoFileUpload = combineReducers({
  jobName,
  jobDescription,
  jobSchedule,
  jobSettings,
  jobWorkflows,
});

const root = function(state = {}, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.parsedObject;
    default:
      return rootNoFileUpload(state, action);
  }
}

export default root;
