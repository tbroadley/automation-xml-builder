import React from 'react';

import pureRender from 'pure-render-decorator';

import FastTextInput from './fast-text-input';

@pureRender
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
