import {
  SET_JOB_NAME,
  SET_JOB_DESCRIPTION,
  SET_JOB_SCHEDULE_TYPE,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
} from './actions';

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const setJobName = makeActionCreator(SET_JOB_NAME, 'name');
export const setJobDescription = makeActionCreator(SET_JOB_DESCRIPTION, 'description');

export const setJobScheduleType = makeActionCreator(SET_JOB_SCHEDULE_TYPE, 'description');
export const setJobScheduleOneTimeDate = makeActionCreator(SET_JOB_SCHEDULE_ONE_TIME_DATE, 'description');
