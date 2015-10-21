import React from 'react';
import { render } from 'react-dom';
import Perf from 'react-addons-perf';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import root from './reducers/root';
import App from './components/app';

const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(root);

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);

// Make the React performance tools available in the browser.
// Usage:
//   1. Call Perf.start() in the console
//   2. Modify the application state (e.g. upload an XML file, add or remove a
//      workflow, change a date)
//   3. Call Perf.stop() in the console
//   4. Call any of Perf's display functions (e.g. Perf.printInclusive() or
///     Perf.printDOM()) in the console
window.Perf = Perf;
