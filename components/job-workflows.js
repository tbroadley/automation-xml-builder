import React from 'react';

class JobActivities extends React.Component {
  render() {
    let workflowIndex = this.props.workflowIndex;

    return (
      <div>
        <table>
          {this.props.activities.map((el, activityIndex) => {
            return (
              <tr key={activityIndex}>
                <td>
                  <input
                    type='text'
                    value={el.name}
                    onChange={e => this.props.onChangeActivityName(workflowIndex, activityIndex, e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => this.props.onRemoveActivity(workflowIndex, activityIndex)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <button onClick={() => this.props.onAddActivity(workflowIndex)}>Add Activity</button>
      </div>
    );
  }
}

export default class JobWorkflows extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Workflows</h2>
        <table>
          {this.props.workflows.map((el, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type='text'
                    value={el.name}
                    onChange={e => this.props.onChangeWorkflowName(index, e.target.value)}
                  />
                  <JobActivities
                    workflowIndex={index}
                    activities={el.activities}
                    onAddActivity={this.props.onAddActivity}
                    onRemoveActivity={this.props.onRemoveActivity}
                    onChangeActivityName={this.props.onChangeActivityName}
                  />
                </td>
                <td>
                  <button onClick={() => this.props.onRemoveWorkflow(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <button onClick={this.props.onAddWorkflow}>Add Workflow</button>
      </div>
    );
  }
}
