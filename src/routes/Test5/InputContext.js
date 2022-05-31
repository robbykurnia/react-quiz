import React, { useCallback, useMemo } from 'react'

const initialState = {
    data: {
        mynumber: '',
        mynumber1: '',
        mynumber2: ''
    }
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

export const useInput = () => {
    const context = React.useContext(Context)
    if (context === undefined) {
        throw new Error(`useInput must be used within a Provider`)
    }
    return context
}

const InputContext = ({ children }) => (
    <Provider>
        {children}
    </Provider>
)

export default InputContext