import React from 'react';

export default class JobName extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Name</h2>
        <input
          type="text"
          value={this.props.name}
          onChange={e => this.props.onSetJobName(e.target.value)}
        />
      </div>
    );
  }
}
