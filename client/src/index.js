import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
