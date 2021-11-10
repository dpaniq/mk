import React from 'react'
import { useContext } from 'react'

import { APP_STATE } from '@constants/_constants'

import { useAppContext } from '@contexts/AppContext'

import { AppInit } from '@app/AppInit'
import { AppAccess } from '@app/AppAccess'
import { AppStop } from '@app/AppStop'
import { AppLoading } from '@app/AppLoading'
// import { AppProcess } from './AppProcess'


// import '../../scss/main.scss';



export const App = () => {

    /* App */
   

    // const { 
    //     sessionId, 
    //     stateApp, setStateApp, renderAppState } = useContext(Contexts.Global)
    const { appStore, appDispatch } = useAppContext()

    console.log('HERE', appStore)
    // debugger;

    const renderAppState = () => {
        switch (appStore.state) {
            case 'INIT':   return (<AppInit />)
            case 'ACCESS': return (<AppAccess />)
            case 'STOP':   return (<AppStop />)
            case 'ACCESS': return (<AppAccess />)
            case 'LOADING':   return (<AppLoading />)
            // case 3:  return (<AppProcess />)
            // default: return (<AppStop />)
        }
        console.info(`:: ${appStore.state} :: [${APP_STATE[appStore.state]}]`)
    }
    return renderAppState()
}
