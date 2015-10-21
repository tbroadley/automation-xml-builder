import React from 'react';

// A simple wrapper for a text input element. It implements
// shouldComponentUpdate to make sure the input element is only changed in the
// DOM when the value is actually changed. this.props.onChange should not be
// modified since it is not checked for changes.
export default class FastTextInput extends React.Component {
  render() {
    return (
      <input
        type='text'
        value={this.props.value}
        onChange={e => this.props.onChange(e.target.value)}
      />
    );
  }

  shouldComponentUpdate(newProps) {
    return this.props.value !== newProps.value;
  }
}
