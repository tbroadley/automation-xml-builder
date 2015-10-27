import React from 'react';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';

import {
  uploadFile,
  clearAll,
} from '../actions/action-creators';

import { toObject, toXML } from '../parser/parser';

@pureRender
class AppSettings extends React.Component {
  render() {
    let {
      dispatch,
      jobName,
    } = this.props;

    return (
      <div>
        <h2>Application Settings</h2>
        <div>
          <h3>Upload File</h3>
          <input
            type='file'
            ref='fileInput'
            onChange={e => this.handleUpload(e, dispatch)}
          />
        </div>
        <div>
          <button onClick={() => dispatch(clearAll())}>
            Clear All
          </button>
        </div>
        <div>
          <button onClick={() => this.handleDownload(this.props)}>
            Download
          </button>
        </div>
      </div>
    );
  }

  handleUpload(e, dispatch) {
    e.preventDefault();

    // Get the list of files that were uploaded by the user.
    const data = e.dataTransfer || e.target;
    const files = data.files;

    const reader = new FileReader();
    reader.onload = e =>
      dispatch(uploadFile(toObject(e.target.result,
        err => alert('Error uploading XML:\r\n' + err.message)
      )));

    reader.readAsText(files[0]);
  }

  handleDownload(props) {
    saveTextAs(toXML(props), props.jobName + '.xml');
  }
}

// To create the XML output, AppSettings needs to receive the entire state tree.
export default connect(state => state)(AppSettings);
