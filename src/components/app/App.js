import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../../pages/home/Home';
import SingleVideo from '../../pages/single-video/SingleVideo';
import BottomFixedNavigation from '../bottom-navigation/BottomNavigation'
import './App.css';

function App() {    
    return (
        <Router>
            <CssBaseline />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/single/:id" component={SingleVideo} />
            </Switch>
            <BottomFixedNavigation />
        </Router>
    );
}

export default App;
