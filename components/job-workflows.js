import React from 'react';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

@pureRender
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
                    <FastInput
                      value={el.name}
                      onChange={value => this.props.onChangeArgumentName(
                        workflowIndex,
                        activityIndex,
                        argumentIndex,
                        value)}
                    />
                    <FastInput
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
}

@pureRender
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
                    <FastInput
                      value={el.name}
                      onChange={value => this.props.onChangeActivityName(workflowIndex, activityIndex, value)}
                    />
                    <p>{el.arguments.length} argument{el.arguments.length === 1 ? '' : 's'}</p>
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

@pureRender
export default class JobWorkflows extends React.Component {
  render() {
    let numWorkflows = this.props.workflows.length;

    return (
      <div>
        <h2>Automation Workflows</h2>
        <p>{numWorkflows} workflow{numWorkflows === 1 ? '' : 's'}</p>
        <table style={{ display: this.props.workflows.length > 0 ? '' : 'none' }}>
          <tbody>
            {this.props.workflows.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>
                    <p>Workflow name:</p>
                    <FastInput
                      value={el.name}
                      onChange={value => this.props.onChangeWorkflowName(index, value)}
                    />
                    <p>{el.activities.length} activit{el.activities.length === 1 ? 'y' : 'ies'}</p>
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
