import {
  SET_JOB_NAME,
  SET_JOB_DESCRIPTION,
  SET_JOB_SCHEDULE_TYPE,
  SET_JOB_SCHEDULE_ONE_TIME_DATE,
  SET_JOB_SCHEDULE_DAILY_TIME,
  ADD_SETTING,
  REMOVE_SETTING,
  CHANGE_SETTING_NAME,
  CHANGE_SETTING_VALUE,
  ADD_WORKFLOW,
  REMOVE_WORKFLOW,
  CHANGE_WORKFLOW_NAME,
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

export const setJobScheduleType = makeActionCreator(SET_JOB_SCHEDULE_TYPE, 'scheduleType');
export const setJobScheduleOneTimeDate = makeActionCreator(SET_JOB_SCHEDULE_ONE_TIME_DATE, 'scheduleOneTimeDate');
export const setJobScheduleDailyTime = makeActionCreator(SET_JOB_SCHEDULE_DAILY_TIME, 'scheduleDailyTime')

export const addSetting = makeActionCreator(ADD_SETTING, 'name', 'value');
export const removeSetting = makeActionCreator(REMOVE_SETTING, 'index');
export const changeSettingName = makeActionCreator(CHANGE_SETTING_NAME, 'index', 'name');
export const changeSettingValue = makeActionCreator(CHANGE_SETTING_VALUE, 'index', 'value');

export const addWorkflow = makeActionCreator(ADD_WORKFLOW, 'name', 'activities');
export const removeWorkflow = makeActionCreator(REMOVE_WORKFLOW, 'index');
export const changeWorkflowName = makeActionCreator(CHANGE_WORKFLOW_NAME, 'index', 'name');
