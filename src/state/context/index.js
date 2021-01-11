import { createContext, useReducer } from 'react'
import { StoreDemo } from '../../demodata'
import { reducer } from '../reducer';

export const Context = createContext(StoreDemo)

export const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, StoreDemo)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}