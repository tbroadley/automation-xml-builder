import {
  ADD_SETTING,
  REMOVE_SETTING,
  CHANGE_SETTING_NAME,
  CHANGE_SETTING_VALUE,
} from '../actions/actions';

function jobSetting(state = { name: '', value: '' }, action) {
  switch (action.type) {
    case CHANGE_SETTING_NAME:
      return Object.assign({}, state, { name: action.name });
    case CHANGE_SETTING_VALUE:
      return Object.assign({}, state, { value: action.value });
    case ADD_SETTING:
      return Object.assign({}, state, { id: action.id });
    default:
      return state;
  }
}

export default function jobSettings(state = [], action) {
  switch (action.type) {
    case ADD_SETTING:
      // Pass undefined state to the job setting reducer to get the default job
      // setting state.
      return [
        ...state,
        jobSetting(undefined, action)
      ];
      case REMOVE_SETTING:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      case CHANGE_SETTING_NAME:
      case CHANGE_SETTING_VALUE:
        return [
          ...state.slice(0, action.index),
          jobSetting(state[action.index], action),
          ...state.slice(action.index + 1)
        ];
    default:
      return state;
  }
}
