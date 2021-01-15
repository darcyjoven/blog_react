/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 13:02:51
 * @FilePath: /blog_react_js/src/index.js
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Index, Index2 } from './layout'
import { Provider } from './state/context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Switch>
        {/* <Route path='/1' component={Index}></Route> */}
        <Route path='/' component={Index2}></Route>
      </Switch> 
    </Provider>
  </BrowserRouter> ,
  document.getElementById('root')
);

