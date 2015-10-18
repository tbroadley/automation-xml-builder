import { combineReducers } from 'redux';

import { SET_JOB_SCHEDULE_TYPE, ScheduleTypes } from '../actions/actions';

function type(state = ScheduleTypes.ONE_TIME, action) {
  switch (action.type) {
    case SET_JOB_SCHEDULE_TYPE:
      return action.scheduleType;
    default:
      return state;
  }
}

const jobSchedule = combineReducers({
  type,
});

export default jobSchedule;
