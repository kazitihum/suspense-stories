import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from '../../constants/Routes';
import { withAuthentication } from '../Session';

import Navigation from '../Navigation';
import LandingPage from '../../pages/Landing';
import SignUpPage from '../../pages/SignUp';
import SignInPage from '../../pages/SignIn';
import PasswordForgetPage from '../../pages/PasswordForget';
import HomePage from '../../pages/Home/Home';
import AccountPage from '../../pages/Account';
import AdminPage from '../../pages/Admin';

import SingleAudio from '../../pages/SingleAudio/SingleAudio';
import BottomFixedNavigation from '../BottomNavigation/BottomNavigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

function App() {
    return (
        <Router>
            <CssBaseline />

            <Navigation />

            <Switch>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
                <Route exact path={ROUTES.ADMIN} component={AdminPage} />
                <Route path="/single/:id" component={SingleAudio} />
            </Switch>

            <BottomFixedNavigation />
        </Router>
    );
}

export default withAuthentication(App);
