import React from 'react'
import { useEffect, useContext } from 'react'

// import '../../scss/components/loader.scss'
import { useAppContext } from '@contexts/AppContext'

export const AppLoading = () => {

    const { appStore, appStoreDispatch } = useAppContext()

    // useEffect(() => setTimeout(() => appStoreDispatch({type: 'access'}), 1000))

    return (
        <div id="loader">
            <div className="loader__text">Loading...</div>
        </div>
    )
}

