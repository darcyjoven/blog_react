import React from 'react';
import ReactDOM from 'react-dom';
import { Index2 } from './layout'
import { Provider } from './state/context';


ReactDOM.render(
  <Provider>
    <Index2 />
  </Provider>,
  document.getElementById('root')
);

