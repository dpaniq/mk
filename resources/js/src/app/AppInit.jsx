import React from "react";
import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { useAppContext } from "@contexts/AppContext";
import { axiosPost } from "@utils/axios";
// import '../../scss/components/loader.scss'
import { PageLogin } from "@pages/login/PageLogin";

export const AppInit = () => {
    const { appStore, appStoreDispatch, userStore, userStoreDispatch } =
        useAppContext();

    // // TODO Проверка что все ок
    

    useEffect(() => {
        console.log('12312312')

        // After init asking for access
        setTimeout(() => {
                appStoreDispatch({type: 'access'})
        }, 2000)
    }, [appStore.state]);

    return <>Initialization...</>;
};
