import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Characters} from './Characters/Characters';
import {Episodes} from './Episodes/Episodes';
import {Locations} from './Locations/Locations';
import {MyWatchList} from './MyWatchList/MyWatchList';

export const useRoutes = () => {

        return (
            <Switch>
                <Route path="/character" exact>
                    <Characters />
                </Route>
                <Route path="/episode" exact>
                    <Episodes />
                </Route>
                <Route path="/location" exact>
                    <Locations />
                </Route>
                <Route path="/list" exact>
                    <MyWatchList />
                </Route>
                <Redirect to="/character" />
            </Switch>
        )
};