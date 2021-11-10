import React from 'react'
import { useContext, createContext, useReducer } from 'react'


import { 
    AppReducer, AppInitialState, useAppReducer,
    UserReducer, UserInitialState
} from '@store/_reducers'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    
    const [appStore, appStoreDispatch] = useAppReducer()
    const [userStore, userStoreDispatch] = useReducer(UserReducer, UserInitialState)
    
    return (
        <AppContext.Provider value={{
            appStore, appStoreDispatch,
            userStore, userStoreDispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}