import { combineReducers } from 'redux';

import jobName from './job-name.js';
import jobDescription from './job-description'
import jobSchedule from './job-schedule.js';

const root = combineReducers({
  jobName,
  jobDescription,
  jobSchedule,
});

export default root;
