import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import './config/ReactotronConfig';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor } from './store';
import Routes from './routes';
import history from './services/history';

import './static/css/style.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes>
            <GlobalStyle />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default hot(App);
