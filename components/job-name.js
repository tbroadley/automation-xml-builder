import React from 'react';

import FastTextInput from './fast-text-input';

export default class JobName extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Name</h2>
        <FastTextInput
          value={this.props.name}
          onChange={value => this.props.onSetJobName(value)}
        />
      </div>
    );
  }
}
