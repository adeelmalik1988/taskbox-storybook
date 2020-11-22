import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './lib/store';

import {PureInboxScreen} from './components/InboxScreen/InboxScreen'

function App() {
  return (
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
  );
}

export default App;
