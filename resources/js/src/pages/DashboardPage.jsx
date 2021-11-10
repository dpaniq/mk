import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import { Header, Aside, Content, Footer } from "@components/dashboard";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// import '@scss/dashboard.scss'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const DashboardPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Dashboard main</title>
            </Helmet>
            <div className="wrapper">
                <Header />
                <Aside />
                {/* <Content /> */}
                <Footer />
            </div>
        </HelmetProvider>
    );
};
