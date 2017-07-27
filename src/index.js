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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
