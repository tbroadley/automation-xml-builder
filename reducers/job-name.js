import { SET_JOB_NAME } from '../actions/actions';

export default function jobName(state = '', action) {
  switch (action.type) {
    case SET_JOB_NAME:
      return action.name;
    default:
      return state;
  }
}
