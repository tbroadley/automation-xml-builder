import { SET_JOB_NAME } from './actions';

export function setJobName(name) {
    return {
      type: SET_JOB_NAME,
      name: name,
    };
}
