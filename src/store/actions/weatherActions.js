import { ACTION_TYPES } from '../reducers/weatherReducer';
import to from 'await-to-js'

import { getDaily, getCurrent } from '../../services/api';

export const fetchCurrent = (params) => async dispatch => {

    const [err, payload] = await to(getCurrent(params))
    if (err) {
        return
    }

    dispatch({
        type: ACTION_TYPES.GET_CURRENT_RESULTS,
        payload
    })
}

export const fetchDaily = (params) => async dispatch => {

    const [err, payload] = await to(getDaily(params))

    if (err) {
        return
    }

    dispatch({
        type: ACTION_TYPES.GET_DAILY_RESULTS,
        payload
    })
}
