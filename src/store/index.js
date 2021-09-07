import React, { useReducer } from 'react';
import rootReducer from './reducers';
import { auth } from './reducers/auth';

export const GlobalStateContext = React.createContext([]);

const Store = ({children}) => {
    const [state, dispatch] = useReducer(rootReducer, {
        auth
    });
    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export default Store;