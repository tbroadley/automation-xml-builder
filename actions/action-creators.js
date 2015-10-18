import { SET_JOB_NAME, SET_JOB_SCHEDULE_TYPE } from './actions';

export function setJobName(name) {
  return {
    type: SET_JOB_NAME,
    name,
  };
}

export function setJobScheduleType(scheduleType) {
  return {
    type: SET_JOB_SCHEDULE_TYPE,
    scheduleType,
  };
}
