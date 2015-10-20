import React from 'react';

export default class AppSettings extends React.Component {
  render() {
    return (
      <div>
        <h2>Upload File</h2>
        <input
          type='file'
          ref='fileInput'
          onChange={e => this.handleUpload(e, this.props.onFileUpload)}
        />
      </div>
    );
  }

  handleUpload(e, onFileUpload) {
    e.preventDefault();

    const data = e.dataTransfer || e.target;
    const files = data.files;

    const reader = new FileReader();
    reader.onload = result =>
      onFileUpload(result.target.result);

    reader.readAsText(files[0]);
  }
}
