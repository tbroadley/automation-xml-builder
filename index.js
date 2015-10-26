import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import root from './reducers/root';
import App from './components/app';

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'string.prototype.repeat';

render(
  <Provider store={createStore(root)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
