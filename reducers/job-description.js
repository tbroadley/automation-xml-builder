import { SET_JOB_DESCRIPTION } from '../actions/actions';

export default function jobDescription(state = "", action) {
  switch (action.type) {
    case SET_JOB_DESCRIPTION:
      return action.description;
    default:
      return state;
  }
}
