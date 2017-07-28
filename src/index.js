import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

WebFont.load({
    google: {
      families: ['Roboto:100,200,300']
    }
  });

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

registerServiceWorker();
