import { combineReducers } from 'redux';

import jobName from './job-name.js';
import jobDescription from './job-description'
import jobSchedule from './job-schedule.js';
import jobSettings from './job-settings';
import jobAttributes from './job-attributes';

const root = combineReducers({
  jobName,
  jobDescription,
  jobSchedule,
  jobSettings,
  jobAttributes,
});

export default root;
