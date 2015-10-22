import React from 'react';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

@pureRender
export default class JobSettings extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Settings</h2>
        <table style={{ display: this.props.settings.length > 0 ? '' : 'none' }}>
          <tbody>
            {this.props.settings.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>
                    <FastInput
                      value={el.name}
                      onChange={value =>
                        this.props.onChangeSettingName(index, value)}
                    />
                  </td>
                  <td>
                    <FastInput
                      value={el.value}
                      onChange={value =>
                        this.props.onChangeSettingValue(index, value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => this.props.onRemoveSetting(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.props.onAddSetting}>Add Setting</button>
      </div>
    );
  }
}
