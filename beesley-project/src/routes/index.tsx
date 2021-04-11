import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Start from './Start';
import Home from './Home';
import JakePage from './Jake';
import LukePage from './Luke';
import AboutJakePage from './AboutJake';
import JakeMoviePage from './JakeMovies';
import JakeImagePage from './JakeImages';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Start}
                />
                <Route 
                    exact
                    path="/home"
                    component={Home}
                />
                <Route 
                    exact
                    path="/jake"
                    component={JakePage}
                />
                <Route 
                    exact
                    path="/luke"
                    component={LukePage}
                />
                <Route 
                    exact
                    path="/aboutJake"
                    component={AboutJakePage}
                />
                <Route 
                    exact
                    path="/jakemovies"
                    component={JakeMoviePage}
                />
                <Route 
                    exact
                    path="/jakeimages"
                    component={JakeImagePage}
                />
            </Switch>
        </Router>
    );
}

export default AppRouter;