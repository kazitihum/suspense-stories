import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../../pages/home/Home';
import SingleVideo from '../../pages/single-video/SingleVideo';
import './App.css';

function App() {
    return (
        <Router>
            <CssBaseline />
            <Route exact path="/" component={Home} />
            <Route exact path="/single" component={SingleVideo} />
        </Router>
    );
}

export default App;
