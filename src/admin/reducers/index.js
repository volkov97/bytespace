import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import interfaces from './interfaces';

export default combineReducers({
    routing: routerReducer,
    events,
    interfaces
});
