import React from 'react';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

@pureRender
export default class JobName extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Name</h2>
        <FastInput
          value={this.props.name}
          onChange={value => this.props.onSetJobName(value)}
        />
      </div>
    );
  }
}
