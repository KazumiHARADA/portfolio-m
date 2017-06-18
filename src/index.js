import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger';
import { ThemeProvider } from 'react-css-themr';
import reducer from './reducers'
import App from './components/App'

const logger = createLogger({
    //empty options
});

let store = createStore(reducer, applyMiddleware(logger));

console.log(store.getState())

render(
  <Provider store={store}>
      <ThemeProvider>
          <App/>
      </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
