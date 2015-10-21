import React from 'react';

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
