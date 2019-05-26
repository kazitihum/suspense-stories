import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from '../../pages/home/Home';
import SingleVideo from '../../pages/single-video/SingleVideo';
import BottomFixedNavigation from '../bottom-navigation/BottomNavigation'
import './App.css';

function App() {
    return (
        <Router>
            <CssBaseline />
            <Route exact path="/" component={Home} />
            <Route exact path="/single" component={SingleVideo} />
            <BottomFixedNavigation />
        </Router>
    );
}

export default App;
