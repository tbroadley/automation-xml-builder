import React from 'react';

export default class JobName extends React.Component {
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

  // This method gets the value of the text input, trims it of whitespace, and
  // uses the callback provided in the props to change the automation job name
  // in the store. Finally, it clears the contents of the text input.
  handleClick() {
    const node = this.refs.input;
    const name = node.value.trim();
    this.props.onSetJobName(name);
    node.value = "";
  }
}
