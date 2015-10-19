import React from 'react';

export default class JobSettings extends React.Component {
  render() {
    return (
      <div>
        <h2>Automation Settings</h2>
        <table>
          {this.props.settings.map((el, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type='text'
                    value={el.name}
                    onChange={e =>
                      this.props.onChangeSettingName(index, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={el.value}
                    onChange={e =>
                      this.props.onChangeSettingValue(index, e.target.value)}
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
        </table>
        <button onClick={this.props.onAddSetting}>Add Setting</button>
      </div>
    );
  }
}
