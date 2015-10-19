export const SET_JOB_NAME = 'SET_JOB_NAME';
export const SET_JOB_DESCRIPTION = 'SET_JOB_DESCRIPTION';
export const SET_JOB_SCHEDULE_TYPE = 'SET_JOB_SCHEDULE_TYPE';
export const SET_JOB_SCHEDULE_ONE_TIME_DATE = 'SET_JOB_SCHEDULE_ONE_TIME_DATE';

// Automations are either run once, or are scheduled to run once a day at a
// specific time.
export const ScheduleTypes = {
  DAILY: 'DAILY',
  ONE_TIME: 'ONE_TIME',
}
