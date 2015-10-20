import React from 'react';

export default class JobDescription extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Description</h2>
        <input
          type="text"
          value={this.props.description}
          onChange={e => this.props.onSetJobDescription(e.target.value)}
        />
      </div>
    );
  }
}
