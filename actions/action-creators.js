import { SET_AUTOMATION_NAME } from './actions';

export function setAutomationName(name) {
    return {
      type: SET_AUTOMATION_NAME,
      name: name,
    };
}
