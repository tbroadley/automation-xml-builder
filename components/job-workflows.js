import React from 'react';

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
