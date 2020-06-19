import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import Transactions from './transactions.js';

const initialState = {
    transaction: []
}

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function delTransaction(id) {
        dispatch({
            type: 'DEL_TRANS',
            payload: id
        })
    }

    function addTransaction(Transactions) {
        dispatch({
            type: 'ADD_TRANS',
            payload: Transactions
        })
    }

    return (<GlobalContext.Provider value={{
        transaction: state.transaction,
        delTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalProvider;


