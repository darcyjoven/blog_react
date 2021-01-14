import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './layout'
import { StoreDemo } from './demodata'

const Context = React.createContext(StoreDemo)

const Provider = (props) => {
  const [state,dispatch] = React.useReducer(reducer,)
  return (
    <Context.Provider values={ }>
      {props.children}
    </Context.Provider>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

