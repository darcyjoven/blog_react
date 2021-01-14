import React from 'react';
import ReactDOM from 'react-dom';
import { Index, Index2 } from './layout'
import { Provider } from './state/context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Switch>
        <Route path='/1' component={Index}></Route>
        <Route path='/2' component={Index2}></Route>
      </Switch> 
    </Provider>
  </BrowserRouter> ,
  document.getElementById('root')
);

