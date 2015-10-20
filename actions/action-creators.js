import {
  UPLOAD_FILE,
  CLEAR_ALL,
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
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  CHANGE_ACTIVITY_NAME,
  ADD_ARGUMENT,
  REMOVE_ARGUMENT,
  CHANGE_ARGUMENT_NAME,
  CHANGE_ARGUMENT_VALUE,
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

export const uploadFile = makeActionCreator(UPLOAD_FILE, 'parsedObject');
export const clearAll = makeActionCreator(CLEAR_ALL);

export const setJobName = makeActionCreator(SET_JOB_NAME, 'name');
export const setJobDescription = makeActionCreator(SET_JOB_DESCRIPTION, 'description');

export const setJobScheduleType = makeActionCreator(SET_JOB_SCHEDULE_TYPE, 'scheduleType');
export const setJobScheduleOneTimeDate = makeActionCreator(SET_JOB_SCHEDULE_ONE_TIME_DATE, 'scheduleOneTimeDate');
export const setJobScheduleDailyTime = makeActionCreator(SET_JOB_SCHEDULE_DAILY_TIME, 'scheduleDailyTime')

export const addSetting = makeActionCreator(ADD_SETTING);
export const removeSetting = makeActionCreator(REMOVE_SETTING, 'index');
export const changeSettingName = makeActionCreator(CHANGE_SETTING_NAME, 'index', 'name');
export const changeSettingValue = makeActionCreator(CHANGE_SETTING_VALUE, 'index', 'value');

export const addWorkflow = makeActionCreator(ADD_WORKFLOW);
export const removeWorkflow = makeActionCreator(REMOVE_WORKFLOW, 'workflowIndex');
export const changeWorkflowName = makeActionCreator(CHANGE_WORKFLOW_NAME, 'workflowIndex', 'name');

export const addActivity = makeActionCreator(ADD_ACTIVITY, 'workflowIndex');
export const removeActivity = makeActionCreator(REMOVE_ACTIVITY, 'workflowIndex', 'activityIndex');
export const changeActivityName = makeActionCreator(CHANGE_ACTIVITY_NAME, 'workflowIndex', 'activityIndex', 'name');

export const addArgument = makeActionCreator(ADD_ARGUMENT, 'workflowIndex', 'activityIndex');
export const removeArgument = makeActionCreator(REMOVE_ARGUMENT, 'workflowIndex', 'activityIndex', 'argumentIndex');
export const changeArgumentName = makeActionCreator(
  CHANGE_ARGUMENT_NAME,
  'workflowIndex',
  'activityIndex',
  'argumentIndex',
  'name'
);
export const changeArgumentValue = makeActionCreator(
  CHANGE_ARGUMENT_VALUE,
  'workflowIndex',
  'activityIndex',
  'argumentIndex',
  'value'
);
