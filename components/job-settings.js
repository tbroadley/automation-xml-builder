import React from 'react';

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
          </tbody>
        </table>
        <button onClick={this.props.onAddSetting}>Add Setting</button>
      </div>
    );
  }
}
