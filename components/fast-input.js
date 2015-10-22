import React from 'react';

// A simple wrapper for a text input element. It implements
// shouldComponentUpdate to make sure the input element is only changed in the
// DOM when the value is actually changed. this.props.onChange should not be
// modified since it is not checked for changes.
// This does not work with PureRenderMixin. Not sure why.
export default class FastInput extends React.Component {
  render() {
    switch (this.props.type) {
      case 'checkbox':
      case 'radio':
        return (
          <input
            type={this.props.type}
            checked={this.props.checked}
            onChange={e => this.props.onChange(e.target.value)}
          />
        );
      default:
        return (
          <input
            type={this.props.type || 'text'}
            value={this.props.value}
            onChange={e => this.props.onChange(e.target.value)}
          />
        );
    }
  }

  shouldComponentUpdate(newProps) {
    switch (this.props.type) {
      case 'checkbox':
      case 'radio':
        return this.props.checked !== newProps.checked;
      default:
        return this.props.value !== newProps.value;
    }
  }
}
