import React from 'react';

export default class JobDescription extends React.Component {
  render() {
    const description = this.props.description;

    return (
      <div>
        <h2>
          {"Automation Description" +
            (description === "" ? "" : ": " + description)}
        </h2>
        <input type="text" ref="input" />
        <button onClick={() => this.handleClick()}>
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
    const description = node.value.trim();
    this.props.onSetJobDescription(description);
    node.value = "";
  }
}
