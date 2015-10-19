import {
  ADD_WORKFLOW,
  REMOVE_WORKFLOW,
  CHANGE_WORKFLOW_NAME,
} from '../actions/actions'

function workflow(state = { name: '', activities: [] }, action) {
  switch (action.type) {
    case CHANGE_WORKFLOW_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
}

export default function jobAttributes(state = [], action) {
  switch (action.type) {
    case ADD_WORKFLOW:
      return [...state, {
          name: action.name,
          activities: action.activities,
        }
      ];
    case REMOVE_WORKFLOW:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case CHANGE_WORKFLOW_NAME:
      return [
        ...state.slice(0, action.index),
        workflow(state[action.index], action),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}
