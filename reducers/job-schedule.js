import { combineReducers } from 'redux';

import {
  SET_JOB_SCHEDULE_TYPE,
  ScheduleTypes,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
} from '../actions/actions';

function type(state = ScheduleTypes.ONE_TIME, action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_TYPE:
      return action.scheduleType;
    default:
      return state;
  }
}

// The default run time for a one-time automation is now.
function oneTimeDate(state = new Date(), action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_ONE_TIME_DATE:
      return action.scheduleOneTimeDate;
    default:
      return state;
  }
}

const jobSchedule = combineReducers({
  type,
  oneTimeDate,
});

export default jobSchedule;