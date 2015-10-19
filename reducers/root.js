import { combineReducers } from 'redux';

import jobName from './job-name.js';
import jobDescription from './job-description'
import jobSchedule from './job-schedule.js';
import jobSettings from './job-settings';
import jobWorkflows from './job-workflows';

const root = combineReducers({
  jobName,
  jobDescription,
  jobSchedule,
  jobSettings,
  jobWorkflows,
});

export default root;
