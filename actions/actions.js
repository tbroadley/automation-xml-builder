export const SET_JOB_NAME = 'SET_JOB_NAME';
export const SET_JOB_DESCRIPTION = 'SET_JOB_DESCRIPTION';

export const SET_JOB_SCHEDULE_TYPE = 'SET_JOB_SCHEDULE_TYPE';
export const SET_JOB_SCHEDULE_ONE_TIME_DATE = 'SET_JOB_SCHEDULE_ONE_TIME_DATE';
export const SET_JOB_SCHEDULE_DAILY_TIME = 'SET_JOB_SCHEDULE_DAILY_TIME';

export const ADD_SETTING = 'ADD_SETTING';
export const REMOVE_SETTING = 'REMOVE_SETTING';
export const CHANGE_SETTING_NAME = 'CHANGE_SETTING_NAME';
export const CHANGE_SETTING_VALUE = 'CHANGE_SETTING_VALUE';

export const ADD_WORKFLOW = 'ADD_WORKFLOW';
export const REMOVE_WORKFLOW = 'REMOVE_WORKFLOW';
export const CHANGE_WORKFLOW_NAME = 'CHANGE_WORKFLOW_NAME';

export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const CHANGE_ACTIVITY_NAME = 'CHANGE_ACTIVITY_NAME';

// Automations are either run once, or are scheduled to run once a day at a
// specific time.
export const ScheduleTypes = {
  DAILY: 'DAILY',
  ONE_TIME: 'ONE_TIME',
}
