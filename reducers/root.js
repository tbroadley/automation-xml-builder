import { combineReducers } from 'redux';

import jobName from './job-name.js';
import jobSchedule from './job-schedule.js';

const root = combineReducers({
  jobName,
  jobSchedule,
});

export default root;
