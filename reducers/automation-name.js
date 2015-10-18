var Actions = require('../actions/actions');

module.exports = function(state = "", action) {
  switch (action.type) {
    case Actions.SET_AUTOMATION_NAME:
      return action.name;
    default:
      return state;
  }
}
