import React from 'react';
import { connect } from 'react-redux';

import pureRender from 'pure-render-decorator';

import FastInput from './fast-input';

import {
  addSetting,
  removeSetting,
  changeSettingName,
  changeSettingValue,
} from '../actions/action-creators';

@pureRender
class JobSettings extends React.Component {
  render() {
    let {
      dispatch,
      settings,
    } = this.props;
    let numSettings = settings.length;

    return (
      <div>
        <h2>Automation Settings</h2>
        <p>{numSettings} setting{numSettings === 1 ? '' : 's'}</p>
        <table style={{ display: numSettings > 0 ? '' : 'none' }}>
          <tbody>
            {settings.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>
                    <FastInput
                      value={el.name}
                      onChange={name =>
                        dispatch(changeSettingName(index, name))}
                    />
                  </td>
                  <td>
                    <FastInput
                      value={el.value}
                      onChange={value =>
                        dispatch(changeSettingValue(index, value))}
                    />
                  </td>
                  <td>
                    <button onClick={() => dispatch(removeSetting(index))}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => dispatch(addSetting())}>Add Setting</button>
      </div>
    );
  }
}

export default connect(state => ({ settings: state.jobSettings }))(JobSettings);
