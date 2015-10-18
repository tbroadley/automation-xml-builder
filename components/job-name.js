import React from 'react';

export default class AppSettings extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div>
        <h1>
          {"Automation Name" + (name === "" ? "" : ": " + name)}
        </h1>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>
          Change
        </button>
      </div>
    );
  }

  handleClick() {
    const node = this.refs.input;
    const name = node.value.trim();
    this.props.onSetJobName(name);
    node.value = "";
  }
}
