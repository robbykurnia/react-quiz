import React, { useCallback, useMemo } from 'react'
import DATA from './_data'

const initialState = {
    data: DATA
}

export const Context = React.createContext(initialState)

Context.displayName = 'Context'

function uiReducer(state, action) {
    if (action.type === 'SET_DATA') {
        return {
            ...state,
            data: action.value,
        }
    } else {
        return state
    }
}

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(uiReducer, initialState)

    const setData = useCallback(
        (value) => dispatch({ type: 'SET_DATA', value }),
        [dispatch]
    )


    const values = useMemo(
        () => ({
            ...state,
            setData,
        }),
        [state]
    )

    return <Context.Provider value={values} {...props} />
}

export const useTable = () => {
    const context = React.useContext(Context)
    if (context === undefined) {
        throw new Error(`useTable must be used within a Provider`)
    }
    return context
}

const TableContext = ({ children }) => (
    <Provider>
        {children}
    </Provider>
)

export default TableContext