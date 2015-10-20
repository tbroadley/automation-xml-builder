import React from 'react';

export default class AppSettings extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Upload File</h2>
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

    const data = e.dataTransfer || e.target;
    const files = data.files;

    const reader = new FileReader();
    reader.onload = result =>
      onFileUpload(result.target.result);

    reader.readAsText(files[0]);
  }

  getDownloadLink() {
    return 'data:text/xml;charset=utf-8,' +
      encodeURIComponent(this.props.downloadXML);
  }
}
