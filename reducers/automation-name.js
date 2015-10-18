import { SET_AUTOMATION_NAME } from '../actions/actions';

export default function automationName(state = "", action) {
  switch (action.type) {
    case SET_AUTOMATION_NAME:
      return action.name;
    default:
      return state;
  }
}
