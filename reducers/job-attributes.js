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
      // Pass undefined state to the workflow reducer to get the default
      // workflow state.
      return [
        ...state,
        workflow(undefined, action)
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
