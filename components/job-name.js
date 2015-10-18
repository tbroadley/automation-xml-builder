import React from 'react';

export default class AppSettings extends React.Component {
  render() {
    return (
      <p>
        This is the job name component. The name is {this.props.name}.
      </p>
    );
  }
}
