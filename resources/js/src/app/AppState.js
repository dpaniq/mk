import React from 'react'
import { useContext } from 'react'

import Contexts from '../contexts/_contexts'
import '../../scss/main.scss';

import { AppLoading } from './AppLoading'
import { AppProcess } from './AppProcess'
import { AppStop } from './AppStop'

export const AppState = () => {

    const { sessionId, stateApp, setStateApp } = useContext(Contexts.Global)

    const renderAppState = () => {
        switch (stateApp) {
            case 1:  return (<AppLoading />)
            case 2:  return (<AppStop />)
            case 3:  return (<AppProcess />)
            default: return (<AppStop />)
        }
    }

    return (renderAppState())
}
