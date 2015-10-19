import {
  SET_JOB_NAME,
  SET_JOB_DESCRIPTION,
  SET_JOB_SCHEDULE_TYPE,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
} from './actions';

export function setJobName(name) {
  return {
    type: SET_JOB_NAME,
    name,
  };
}

export function setJobDescription(description) {
  return {
    type: SET_JOB_DESCRIPTION,
    description,
  };
}


export function setJobScheduleType(scheduleType) {
  return {
    type: SET_JOB_SCHEDULE_TYPE,
    scheduleType,
  };
}

export function setJobScheduleOneTimeDate(scheduleOneTimeDate) {
  return {
    type: SET_JOB_SCHEDULE_ONE_TIME_DATE,
    scheduleOneTimeDate,
  };
}
