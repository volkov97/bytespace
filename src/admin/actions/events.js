import config from '../../core/config/general.config';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import {browserHistory} from 'react-router';

import * as actionTypes from '../actions-types/events';

function fetchEventsRequest() {
    return {
        type: actionTypes.FETCH_EVENTS_REQUEST
    }
}

function fetchEventsSuccess(payload) {
    return {
        type: actionTypes.FETCH_EVENTS_SUCCESS,
        payload
    }
}

function fetchCurrentEventsSuccess(payload) {
    return {
        type: actionTypes.FETCH_CURRENT_EVENTS_SUCCESS,
        payload
    }
}

function fetchEventsFailure(payload) {
    return {
        type: actionTypes.FETCH_EVENTS_FAILURE,
        payload
    }
}

function setEventsTableData(payload) {
    return {
        type: actionTypes.SET_EVENTS_TABLE_DATA,
        payload
    }
}

function setEventsTableFields(payload) {
    return {
        type: actionTypes.SET_EVENTS_TABLE_FIELDS,
        payload
    }
}

function postEventRequest() {
    return {
        type: actionTypes.POST_EVENT_REQUEST
    }
}

function postEventSuccess(payload) {
    return {
        type: actionTypes.POST_EVENT_SUCCESS,
        payload
    }
}

function postEventFailure(payload) {
    return {
        type: actionTypes.POST_EVENT_FAILURE,
        payload
    }
}

function putEventRequest() {
    return {
        type: actionTypes.PUT_EVENT_REQUEST
    }
}

function putEventSuccess(payload) {
    return {
        type: actionTypes.PUT_EVENT_SUCCESS,
        payload
    }
}

function putEventFailure(payload) {
    return {
        type: actionTypes.PUT_EVENT_FAILURE,
        payload
    }
}

function deleteEventsRequest() {
    return {
        type: actionTypes.DELETE_EVENTS_REQUEST,
    }
}

function deleteEventsSuccess(payload) {
    return {
        type: actionTypes.DELETE_EVENTS_SUCCESS,
        payload
    }
}

function deleteEventsFailure(payload) {
    return {
        type: actionTypes.DELETE_EVENTS_FAILURE,
        payload
    }
}

export function flushEvent() {
    return {
        type: actionTypes.FLUSH_EVENT
    }
}

export function handleLoadingEvents() {
    return function (dispatch) {
        dispatch(fetchEventsRequest());

        return fetch(`${config.server}/api/events`)
            .then(response => response.json())
            .then(json => {
                const tableFields = [
                    'Название',
                    'Билеты',
                    'Дата проведения',
                    'Статус',
                ];
                dispatch(setEventsTableFields(tableFields));
                const tableData = json.data.map(_ => {
                    return {
                        id: _._id,
                        actions: [
                            {
                                name: 'Изменить',
                                link: `/dashboard/events/update?id=${_._id}`
                            },
                            {
                                name: 'Посетители',
                                link: `/dashboard/events/${_._id}/visitors`
                            }
                        ],
                        cells: [
                            _.title,
                            `${_.tickets - _.visitors}/${_.tickets}`,
                            moment(_.date).format('DD/MM/YYYY HH:mm'),
                            _.publishStatus ? 'Активен' : 'Неактивен'
                        ]
                    }
                });
                dispatch(setEventsTableData(tableData));
                dispatch(fetchEventsSuccess(json.data))
            })
            .catch(err => dispatch(fetchEventsFailure(err)));
    }
}

export function handleLoadingCurrentEvent(id) {
    return function (dispatch) {
        dispatch(fetchCurrentEventsSuccess(id));
    }
}

export function handlePostEvent(body) {
    return function (dispatch) {
        dispatch(postEventRequest());

        return fetch(`${config.server}/api/events`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                dispatch(postEventSuccess(json));
                browserHistory.push('/dashboard/events');
            })
            .catch(err => dispatch(postEventFailure(err)));
    }
}

export function handlePutEvent(id, body) {
    return function (dispatch) {
        dispatch(putEventRequest());

        return fetch(`${config.server}/api/events/${id}`, {
            method: 'PUT',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                dispatch(putEventSuccess(json));
                browserHistory.push('/dashboard/events');
            })
            .catch(err => dispatch(putEventFailure(err)));
    }
}

export function handleDeleteEvents(ids) {
    return function (dispatch) {
        if (ids.length) {
            dispatch(deleteEventsRequest());

            return fetch(`${config.server}/api/events`, {
                method: 'DELETE',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ids: ids})
            })
                .then(response => response.json())
                .then(json => dispatch(deleteEventsSuccess(json)))
                .catch(err => dispatch(deleteEventsFailure(err)));
        }
    }
}
