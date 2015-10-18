var redux = require('redux');

var automationName = require('./automation-name.js');

module.exports = redux.combineReducers({
  automationName,
})
