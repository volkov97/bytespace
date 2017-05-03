import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import HomeContainer from './pages/Home/HomeContainer';
import LoginContainer from './pages/Login/LoginContainer';
import NotFound from './pages/NotFound/NotFound';

export const routes = (
    <div>
         <Route path='/' component={IndexContainer}>
            <IndexRoute component={HomeContainer}/>
        </Route>
        <Route path='/login' component={LoginContainer} />
        <Route path="*" component={NotFound} />
    </div>
);
