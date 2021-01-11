import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './layout'
import { Provider } from './state/context';


ReactDOM.render(
  <Provider>
    <Index />
  </Provider>,
  document.getElementById('root')
);

