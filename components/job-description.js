import React from 'react';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

import {
  setJobDescription,
} from '../actions/action-creators';

@pureRender
class JobDescription extends React.Component {
  render() {
    let {
      dispatch,
      description,
    } = this.props;

    return (
      <div>
        <h2>Automation Description</h2>
        <FastInput
          value={description}
          onChange={value => dispatch(setJobDescription(value))}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    description: state.jobDescription,
  }
}

export default connect(mapStateToProps)(JobDescription);
