import { useReducer } from "react"

import { APP_STATE } from "@constants/_constants"

export const AppInitialState = {
    state: 'INIT'
}

export const AppReducer = (state, action) => {

    if (!(Object.keys(APP_STATE).includes(action.type.toUpperCase())))
    {
        throw new Error('[AppReducer]: State is not defined')
    }

    switch (action.type) {
        case 'init':    return { ...state, state: 'INIT' }
        case 'loading': return { ...state, state: 'LOADING' }
        case 'stop':    return { ...state, state: 'STOP' }
        case 'access':  return { ...state, state: 'ACCESS' }
        default:
            throw new Error('[AppReducer]: Action is not defined');
    }
}

export const useAppReducer = () => {
    return useReducer(AppReducer, AppInitialState)
}
