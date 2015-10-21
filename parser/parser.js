import { parseString, Builder } from 'xml2js';

import { ScheduleTypes } from '../actions/actions';

import { getNextIDAndIncrement } from '../id-generator/id-generator';

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
      id: getNextIDAndIncrement(),
      value: el.Value[0],
    })),
    jobWorkflows: [{
      name: obj.Job.Workflow[0].$.Name,
      id: getNextIDAndIncrement(),
      activities: obj.Job.Workflow[0].Activities[0].Activity.map(el => ({
        name: el.$.Name,
        id: getNextIDAndIncrement(),
        arguments: el.Arguments[0].Argument.map(el => ({
          name: el.Name[0],
          value: el.Value[0],
          id: getNextIDAndIncrement(),
        })),
      })),
    }],
  };
}

export function toXML(obj) {
  const oneTime = obj.jobSchedule.type === ScheduleTypes.ONE_TIME;
  const businessDays = obj.jobSchedule.type === ScheduleTypes.DAILY;
  const scheduleType = oneTime ? 'OneTime' : (
    businessDays ? 'BusinessDays' : undefined
  );

  const jobTime = oneTime ? obj.jobSchedule.oneTimeDate : (
    businessDays ? obj.jobSchedule.dailyTime : undefined
  );

  const jobTimeString = oneTime ? (
    pad(jobTime.getFullYear()) + '-' +
      pad(jobTime.getMonth() + 1) + '-' +
      pad(jobTime.getDate()) + 'T' +
      pad(jobTime.getHours()) + ':' +
      pad(jobTime.getMinutes()) + ':' +
      pad(jobTime.getSeconds())
  ) : (
    businessDays ? (
      pad(jobTime.getHours()) + ':' +
        pad(jobTime.getMinutes()) + ':' +
        pad(jobTime.getSeconds())
    ) : undefined
  );

  let builder = new Builder();
  return builder.buildObject({
    Job: {
      $: {
        Name: obj.jobName,
        Description: obj.jobDescription,
      },
      Schedule: [{
        ScheduleType: [
          scheduleType
        ],
        ScheduleData: [
          jobTimeString
        ],
      }],
      Settings: [{
        Setting: obj.jobSettings.map(el => ({
          Name: el.name,
          Value: el.value,
        })),
      }],
      Workflow: obj.jobWorkflows.map(flow => ({
        $: {
          Name: flow.name,
        },
        Activities: [{
          Activity: flow.activities.map(act => ({
            $: {
              Name: act.name,
            },
            Arguments: [{
              Argument: act.arguments.map(arg => ({
                Name: arg.name,
                Value: arg.value,
              })),
            }],
          })),
        }],
      })),
    },
  });
}

function pad(n, digits = 2) {
  let nString = n.toString();

  if (nString.length >= digits) {
    return nString;
  } else {
    return '0'.repeat(digits - nString.length) + nString;
  }
}
