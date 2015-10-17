var actions = require('./actions');

module.exports = {
  setAutomationName: function(name) {
    return {
      type: actions.SET_AUTOMATION_NAME,
      name: name,
    };
  },
};
