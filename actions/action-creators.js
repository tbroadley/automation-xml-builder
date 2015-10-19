import {
  SET_JOB_NAME,
  SET_JOB_DESCRIPTION,
  SET_JOB_SCHEDULE_TYPE,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
  ADD_SETTING,
  REMOVE_SETTING,
  CHANGE_SETTING_NAME,
  CHANGE_SETTING_VALUE,
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

export function addSetting(name = '', value = '') {
  return {
    type: ADD_SETTING,
    name,
    value,
  };
}
export const removeSetting = makeActionCreator(REMOVE_SETTING, 'index');
export const changeSettingName = makeActionCreator(CHANGE_SETTING_NAME, 'index', 'name');
export const changeSettingValue = makeActionCreator(CHANGE_SETTING_VALUE, 'index', 'value');
