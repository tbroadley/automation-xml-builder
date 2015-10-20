import { parseString, Builder } from 'xml2js';

import { ScheduleTypes } from '../actions/actions';

export function toObject(xml) {
  let obj = {};

  parseString(xml, (err, result) => {
    obj = result;
    console.log(err);
  });

  let oneTime = obj.Job.Schedule[0].ScheduleType[0] === 'OneTime';
  let daily = obj.Job.Schedule[0].ScheduleType[0] === 'BusinessDays';
  let scheduleType = oneTime ? ScheduleTypes.ONE_TIME : (
    daily ? ScheduleTypes.DAILY : undefined);

  let scheduleTime = obj.Job.Schedule[0].ScheduleData[0];

  let today = new Date();
  let todayString = today.getFullYear() + '-' +
    (today.getMonth() + 1) + '-' +
    today.getDate();

  return {
    jobName: obj.Job.$.Name,
    jobDescription: obj.Job.$.Description,
    jobSchedule: {
      type: scheduleType,
      oneTimeDate: oneTime ? new Date(scheduleTime) : new Date(),
      dailyTime: daily ? new Date(todayString + 'T' + scheduleTime) : new Date(),
    },
    jobSettings: obj.Job.Settings[0].Setting.map(el => ({
      name: el.Name[0],
      value: el.Value[0],
    })),
    jobWorkflows: [{
      name: obj.Job.Workflow[0].$.Name,
      activities: obj.Job.Workflow[0].Activities[0].Activity.map(el => ({
        name: el.$.Name,
        arguments: el.Arguments[0].Argument.map(el => ({
          name: el.Name[0],
          value: el.Value[0],
        })),
      })),
    }],
  };
}

export function toXML(obj) {
  let builder = new Builder();
  return builder.buildObject(obj);
}
