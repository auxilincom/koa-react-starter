// @flow

import { hot } from 'react-hot-loader/root';

import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import type { BrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import type { StateType, StoreType } from './resources/types';

import routes from './routes';
import configureStore from './resources/store';

import Layout from './components/layout';

const initialState: StateType = {
  user: window.user,
  toast: {
    messages: [],
  },
};

const history: BrowserHistory = createBrowserHistory();
const store: StoreType = configureStore(initialState, history);

const Root = (): React$Node => (
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          {routes()}
        </Layout>
      </ConnectedRouter>
    </Provider>
  </StrictMode>
);

export default hot(Root);
