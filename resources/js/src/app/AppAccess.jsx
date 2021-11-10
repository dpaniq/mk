import React from 'react'
import { useEffect, useState } from 'react'
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { useLocation } from "react-router-dom";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { useAppContext } from '@contexts/AppContext'
import { axiosPost } from '@utils/axios'
// import '../../scss/components/loader.scss'
import { PageLogin } from '@pages/login/PageLogin'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { Jwt } from '@utils/jwt'
import { Redirect } from 'react-router'

export const AppAccess = () => {

    let location = useLocation();

    const { 
        appStore, appStoreDispatch,
        userStore, userStoreDispatch
    } = useAppContext()

    const [ping, setPing] = useState(null);

    const jwtPing = async () => await Jwt.ping()

    console.log('PING', jwtPing())
    
    useEffect(async () => {
        
        setPing(jwtPing)
    }, []);

    switch (ping) {
        case null:  return (<></>)
        case false: return <PageLogin />  
        default: 
            return <Redirect to={location.pathname}></Redirect>
    }
}

