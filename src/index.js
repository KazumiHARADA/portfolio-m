import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger';
import { ThemeProvider } from 'react-css-themr';
import reducer from './reducers'
import App from './components/App'
import {addWork} from './actions/index'

const logger = createLogger({
    //empty options
});

let store = createStore(reducer, applyMiddleware(logger));

store.dispatch(addWork("E-Commerce App","iikanji","../image/e-commerce.png"));
store.dispatch(addWork("Flea Market App","iikanji","../image/flea-market.png"));
store.dispatch(addWork("System Desgin","iikanji","../image/system.png"));

console.log(store.getState())

render(
  <Provider store={store}>
      <ThemeProvider>
          <App/>
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
