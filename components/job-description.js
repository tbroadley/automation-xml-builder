import React from 'react';

import FastTextInput from './fast-text-input';

export default class JobDescription extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Description</h2>
        <FastTextInput
          value={this.props.description}
          onChange={value => this.props.onSetJobDescription(value)}
        />
      </div>
    );
  }
}
