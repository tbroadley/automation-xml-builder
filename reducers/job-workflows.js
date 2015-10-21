import { combineReducers } from 'redux';

import {
  ADD_WORKFLOW,
  REMOVE_WORKFLOW,
  CHANGE_WORKFLOW_NAME,
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  CHANGE_ACTIVITY_NAME,
  ADD_ARGUMENT,
  REMOVE_ARGUMENT,
  CHANGE_ARGUMENT_NAME,
  CHANGE_ARGUMENT_VALUE,
} from '../actions/actions'

function argument(state = { name: '', value: '' }, action) {
  switch (action.type) {
    case CHANGE_ARGUMENT_NAME:
      return Object.assign({}, state, { name: action.name });
    case CHANGE_ARGUMENT_VALUE:
      return Object.assign({}, state, { value: action.value });
    case ADD_ARGUMENT:
      return Object.assign({}, state, { id: action.id });
    default:
      return state;
  }
}

function activityName(state = '', action) {
  switch (action.type) {
    case CHANGE_ACTIVITY_NAME:
      return action.name;
    default:
      return state;
  }
}

function activityArguments(state = [], action) {
  switch (action.type) {
    case ADD_ARGUMENT:
      // Pass undefined state to the activity reducer to get the default
      // activity state.
      return [
        ...state,
        argument(undefined, action)
      ];
    case REMOVE_ARGUMENT:
      return [
        ...state.slice(0, action.argumentIndex),
        ...state.slice(action.argumentIndex + 1)
      ];
    case CHANGE_ARGUMENT_NAME:
    case CHANGE_ARGUMENT_VALUE:
      // Let the action flow down to the activity reducer.
      return [
        ...state.slice(0, action.argumentIndex),
        argument(state[action.argumentIndex], action),
        ...state.slice(action.argumentIndex + 1)
      ];
    default:
      return state;
  }
}

function activityID(state = 0, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return action.id;
    default:
      return state;
  }
}

const activity = combineReducers({
  name: activityName,
  arguments: activityArguments,
  id: activityID,
})

function workflowName(state = '', action) {
  switch (action.type) {
    case CHANGE_WORKFLOW_NAME:
      return action.name;
    default:
      return state;
  }
}

function workflowActivities(state = [], action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      // Pass undefined state to the activity reducer to get the default
      // activity state.
      return [
        ...state,
        activity(undefined, action)
      ];
    case REMOVE_ACTIVITY:
      return [
        ...state.slice(0, action.activityIndex),
        ...state.slice(action.activityIndex + 1)
      ];
    case CHANGE_ACTIVITY_NAME:
    case ADD_ARGUMENT:
    case REMOVE_ARGUMENT:
    case CHANGE_ARGUMENT_NAME:
    case CHANGE_ARGUMENT_VALUE:
      // Let the action flow down to the activity reducer.
      return [
        ...state.slice(0, action.activityIndex),
        activity(state[action.activityIndex], action),
        ...state.slice(action.activityIndex + 1)
      ];
    default:
      return state;
  }
}

function workflowID(state = 0, action) {
  switch (action.type) {
    case ADD_WORKFLOW:
      return action.id;
    default:
      return state;
  }
}

const workflow = combineReducers({
  name: workflowName,
  activities: workflowActivities,
  id: workflowID,
});

export default function jobWorkflows(state = [], action) {
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
        ...state.slice(0, action.workflowIndex),
        ...state.slice(action.workflowIndex + 1)
      ];
    case CHANGE_WORKFLOW_NAME:
    case ADD_ACTIVITY:
    case REMOVE_ACTIVITY:
    case CHANGE_ACTIVITY_NAME:
    case ADD_ARGUMENT:
    case REMOVE_ARGUMENT:
    case CHANGE_ARGUMENT_NAME:
    case CHANGE_ARGUMENT_VALUE:
      // Let the action flow down to the workflow reducer.
      return [
        ...state.slice(0, action.workflowIndex),
        workflow(state[action.workflowIndex], action),
        ...state.slice(action.workflowIndex + 1)
      ];
    default:
      return state;
  }
}
