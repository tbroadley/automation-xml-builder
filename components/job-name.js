import React from 'react';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

import {
  setJobName,
} from '../actions/action-creators';

@pureRender
class JobName extends React.Component {
  render() {
    let {
      dispatch,
      name,
    } = this.props;

    return (
      <div>
        <h2>Automation Name</h2>
        <FastInput
          value={name}
          onChange={value => dispatch(setJobName(value))}
        />
      </div>
    );
  }
}

export default connect(state => ({ name: state.jobName }))(JobName);
