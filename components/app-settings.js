import React from 'react';

export default class AppSettings extends React.Component {
  render() {
    return (
      <div>
        <h2>Application Settings</h2>
        <div>
          <h3>Upload File</h3>
          <input
            type='file'
            ref='fileInput'
            onChange={e => this.handleUpload(e, this.props.onFileUpload)}
          />
        </div>
        <div>
          <button onClick={this.props.onClearAll}>
            Clear All
          </button>
        </div>
        <div>
          <a
            href={this.getDownloadLink()}
            download={this.props.jobName + '.xml'}
          >
            Download
          </a>
        </div>
      </div>
    );
  }

  handleUpload(e, onFileUpload) {
    e.preventDefault();

    // Get the list of files that were uploaded by the user.
    const data = e.dataTransfer || e.target;
    const files = data.files;

    const reader = new FileReader();
    reader.onload = e =>
      onFileUpload(e.target.result);

    reader.readAsText(files[0]);
  }

  // Returns a link to download the XML generated by parser.js from the Redux
  // store.
  getDownloadLink() {
    return 'data:text/xml;charset=utf-8,' +
      encodeURIComponent(this.props.downloadXML);
  }
}
