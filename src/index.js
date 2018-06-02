import React, { Fragment } from 'react';
import 'config/ReactotronConfig';

import Routes from 'routes';
import { Provider } from 'react-redux';
import store from 'store';

import Player from 'components/Player';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>
);

export default App;
