import {
  ADD_WORKFLOW,
  REMOVE_WORKFLOW,
  CHANGE_WORKFLOW_NAME,
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  CHANGE_ACTIVITY_NAME,
} from '../actions/actions'

function activity(state = { name: '', arguments: [] }, action) {
  switch (action.type) {
    case CHANGE_ACTIVITY_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
}

function workflow(state = { name: '', activities: [] }, action) {
  switch (action.type) {
    case CHANGE_WORKFLOW_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    case ADD_ACTIVITY:
      // Pass undefined state to the activity reducer to get the default
      // activity state.
      return {
        name: state.name,
        activities: [
          ...state.activities,
          activity(undefined, action)
        ]
      };
    case REMOVE_ACTIVITY:
      return {
        name: state.name,
        activities: [
          ...state.activities.slice(0, action.activityIndex),
          ...state.activities.slice(action.activityIndex + 1)
        ],
      };
    case CHANGE_ACTIVITY_NAME:
      // Let the action flow down to the activity reducer.
      return {
        name: state.name,
        activities: [
          ...state.activities.slice(0, action.activityIndex),
          activity(state[action.activityIndex], action),
          ...state.activities.slice(action.activityIndex + 1)
        ],
      }
    default:
      return state;
  }
}

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
