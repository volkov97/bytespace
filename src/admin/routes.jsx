import React from 'react';
import {Route, IndexRoute} from 'react-router';

import IndexContainer from './pages/Index/IndexContainer';
import EventsListContainer from './pages/Events/List/EventsListContainer';
import EventCreateContainer from './pages/Events/Create/EventCreateContainer';
import VisitorsListContainer from './pages/Visitors/List/VisitorsListContainer';
import NotFound from './pages/NotFound/NotFound';

export const routes = (
    <div>
        <Route path='/dashboard' component={IndexContainer}>
            <IndexRoute component={EventsListContainer}/>
            <Route path='events' component={EventsListContainer}/>
            <Route path='events/create' component={EventCreateContainer}/>
            <Route path='events/update' component={EventCreateContainer}/>
            <Route path='events/:event_id/visitors' component={VisitorsListContainer}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </div>
);
