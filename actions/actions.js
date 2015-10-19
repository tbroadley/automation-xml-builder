export const SET_JOB_NAME = 'SET_JOB_NAME';
export const SET_JOB_DESCRIPTION = 'SET_JOB_DESCRIPTION';

export const SET_JOB_SCHEDULE_TYPE = 'SET_JOB_SCHEDULE_TYPE';
export const SET_JOB_SCHEDULE_ONE_TIME_DATE = 'SET_JOB_SCHEDULE_ONE_TIME_DATE';
export const SET_JOB_SCHEDULE_DAILY_TIME = 'SET_JOB_SCHEDULE_DAILY_TIME';

export const ADD_SETTING = 'ADD_SETTING';
export const REMOVE_SETTING = 'REMOVE_SETTING';
export const CHANGE_SETTING_NAME = 'CHANGE_SETTING_NAME';
export const CHANGE_SETTING_VALUE = 'CHANGE_SETTING_VALUE';

// Automations are either run once, or are scheduled to run once a day at a
// specific time.
export const ScheduleTypes = {
  DAILY: 'DAILY',
  ONE_TIME: 'ONE_TIME',
}
