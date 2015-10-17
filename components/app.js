var React = require('react');

var AppSettings = require('./app-settings');
var JobName = require('./job-name');
var JobSchedule = require('./job-schedule')
var JobAttributes = require('./job-attributes')

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <AppSettings />
        <JobName />
        <JobSchedule />
        <JobAttributes />
      </div>
    )
  },
});
