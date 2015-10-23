import React from 'react';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

import * as actionCreators from '../actions/action-creators';

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
class JobWorkflows extends React.Component {
  render() {
    let {
      dispatch,
      workflows,
      addWorkflow,
      removeWorkflow,
      changeWorkflowName,
      addActivity,
      removeActivity,
      changeActivityName,
      addArgument,
      removeArgument,
      changeArgumentName,
      changeArgumentValue,
    } = this.props;
    let numWorkflows = workflows.length;

    return (
      <div>
        <h2>Automation Workflows</h2>
        <p>{numWorkflows} workflow{numWorkflows === 1 ? '' : 's'}</p>
        <table style={{ display: numWorkflows > 0 ? '' : 'none' }}>
          <tbody>
            {workflows.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>
                    <p>Workflow name:</p>
                    <FastInput
                      value={el.name}
                      onChange={value => changeWorkflowName(index, value)}
                    />
                    <p>{el.activities.length} activit{el.activities.length === 1 ? 'y' : 'ies'}</p>
                    <JobActivities
                      workflowIndex={index}
                      activities={el.activities}
                      onAddActivity={addActivity}
                      onRemoveActivity={removeActivity}
                      onChangeActivityName={changeActivityName}
                      onAddArgument={addArgument}
                      onRemoveArgument={removeArgument}
                      onChangeArgumentName={changeArgumentName}
                      onChangeArgumentValue={changeArgumentValue}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeWorkflow(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={addWorkflow}>Add Workflow</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    workflows: state.jobWorkflows,
  };
}

export default connect(mapStateToProps, actionCreators)(JobWorkflows);
