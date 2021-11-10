import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import {PageLogin} from '@pages/login/PageLogin';
import {DashboardPage} from '@pages/DashboardPage';

export const DashboardRoute = ({children}) => {
    return (
        <Router>
            {children}

            {/* There are all list of main routes */}
            <Switch>
                <Route exact path="/dashboard">
                    <DashboardPage />
                </Route>
                <Route exact path="/dashboard/login">
                    <PageLogin />
                </Route>
                <Route exact path="/dashboard/posts">
                    
                </Route>
                <Route exact path="/dashboard/create">
                    
                </Route>
                <Route path="*">
                    <>No match 404</>
                </Route>
            </Switch>
        </Router>
    )
}