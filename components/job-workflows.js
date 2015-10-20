import React from 'react';

class JobArguments extends React.Component {
  render() {
    let workflowIndex = this.props.workflowIndex;
    let activityIndex = this.props.activityIndex;

    return (
      <div>
        <table style={{ display: this.props.arguments.length > 0 ? '' : 'none' }}>
          <tbody>
            {this.props.arguments.map((el, argumentIndex) => {
              return (
                <tr key={argumentIndex}>
                  <td>
                    <input
                      type='text'
                      value={el.name}
                      onChange={e => this.props.onChangeArgumentName(
                        workflowIndex,
                        activityIndex,
                        argumentIndex,
                        e.target.value)}
                    />
                    <input
                      type='text'
                      value={el.value}
                      onChange={e => this.props.onChangeArgumentValue(
                        workflowIndex,
                        activityIndex,
                        argumentIndex,
                        e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => this.props.onRemoveArgument(
                        workflowIndex,
                        activityIndex,
                        argumentIndex
                    )}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => this.props.onAddArgument(
            workflowIndex,
            activityIndex
        )}>
          Add Argument
        </button>
      </div>
    );
  }
}

class JobActivities extends React.Component {
  render() {
    let workflowIndex = this.props.workflowIndex;

    return (
      <div>
        <table style={{ display: this.props.activities.length > 0 ? '' : 'none' }}>
          <tbody>
            {this.props.activities.map((el, activityIndex) => {
              return (
                <tr key={activityIndex}>
                  <td>
                    <p>Activity name:</p>
                    <input
                      type='text'
                      value={el.name}
                      onChange={e => this.props.onChangeActivityName(workflowIndex, activityIndex, e.target.value)}
                    />
                    <JobArguments
                      workflowIndex={workflowIndex}
                      activityIndex={activityIndex}
                      arguments={el.arguments}
                      onAddArgument={this.props.onAddArgument}
                      onRemoveArgument={this.props.onRemoveArgument}
                      onChangeArgumentName={this.props.onChangeArgumentName}
                      onChangeArgumentValue={this.props.onChangeArgumentValue}
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
          </tbody>
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
        <table style={{ display: this.props.workflows.length > 0 ? '' : 'none' }}>
          <tbody>
            {this.props.workflows.map((el, index) => {
              return (
                <tr key={index}>
                  <td>
                    <p>Workflow name:</p>
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
                      onAddArgument={this.props.onAddArgument}
                      onRemoveArgument={this.props.onRemoveArgument}
                      onChangeArgumentName={this.props.onChangeArgumentName}
                      onChangeArgumentValue={this.props.onChangeArgumentValue}
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
          </tbody>
        </table>
        <button onClick={this.props.onAddWorkflow}>Add Workflow</button>
      </div>
    );
  }
}
