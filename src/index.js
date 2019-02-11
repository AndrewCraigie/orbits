/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';

import { loadOrbitDefs } from './actions/orbitDefsActions';
import { loadAppSettings } from './actions/appSettingsActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();
store.dispatch(loadAppSettings());
store.dispatch(loadOrbitDefs());

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
