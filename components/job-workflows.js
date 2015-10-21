import React from 'react';

import assert from 'assert';

import FastTextInput from './fast-text-input';

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
                <tr key={el.id}>
                  <td>
                    <FastTextInput
                      value={el.name}
                      onChange={value => this.props.onChangeArgumentName(
                        workflowIndex,
                        activityIndex,
                        argumentIndex,
                        value)}
                    />
                  <FastTextInput
                      value={el.value}
                      onChange={value => this.props.onChangeArgumentValue(
                        workflowIndex,
                        activityIndex,
                        argumentIndex,
                        value)}
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

  shouldComponentUpdate(newProps) {
    // TODO: use deep-equal package instead
    try {
      assert.deepEqual(this.props.arguments, newProps.arguments);
      return false;
    } catch(err) {
      return true;
    }
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
                <tr key={el.id}>
                  <td>
                    <p>Activity name:</p>
                    <FastTextInput
                      value={el.name}
                      onChange={value => this.props.onChangeActivityName(workflowIndex, activityIndex, value)}
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
                <tr key={el.id}>
                  <td>
                    <p>Workflow name:</p>
                    <FastTextInput
                      value={el.name}
                      onChange={value => this.props.onChangeWorkflowName(index, value)}
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
