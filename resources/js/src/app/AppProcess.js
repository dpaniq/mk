import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import '../../scss/main.scss';

import { Container } from '../components/container/Container'
import { Home } from '../pages/Home'

export const AppProcess = () => {
    return (
        <Container>
            <Router basename={process.env.BASENAME}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/team" component={Team} />
                    <Route exact path="/achivements" component={Achivements} />
                    <Route exact path="/spots" component={Spots} /> */}
                </Switch>
            </Router>
        </Container>
    )
}
