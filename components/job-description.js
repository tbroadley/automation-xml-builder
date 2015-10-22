import React from 'react';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

@pureRender
export default class JobDescription extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Description</h2>
        <FastInput
          value={this.props.description}
          onChange={value => this.props.onSetJobDescription(value)}
        />
      </div>
    );
  }
}
