import { combineReducers } from 'redux';

import {
  SET_JOB_SCHEDULE_TYPE,
  ScheduleTypes,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
  SET_JOB_SCHEDULE_DAILY_TIME,
} from '../actions/actions';

function type(state = ScheduleTypes.ONE_TIME, action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_TYPE:
      return action.scheduleType;
    default:
      return state;
  }
}

// The default run time for a one-time automation is the current time.
function oneTimeDate(state = new Date(), action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_ONE_TIME_DATE:
      return action.scheduleOneTimeDate;
    default:
      return state;
  }
}

// The time is represented as a date. The year, month, and day are ignored.
// The default run time for a daily automation is the current time.
function dailyTime(state = new Date(), action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_DAILY_TIME:
      return action.scheduleDailyTime;
    default:
      return state;
  }
}

const jobSchedule = combineReducers({
  type,
  oneTimeDate,
  dailyTime,
});

export default jobSchedule;
