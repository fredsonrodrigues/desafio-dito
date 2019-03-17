import { RATE_DECREASE, RATE_INCREASE, TIMELINE_LOADS, TIMELINE_ERROR, AUTOCOMPLETE_LOADS, AUTOCOMPLETE_ERROR } from "./actionTypes";

export const increaseRate = (value) => dispatch => {
    return dispatch({
        type: RATE_INCREASE,
        payload: value + 1
    });
}

export const decreaseRate = (value) => dispatch => {
    return dispatch({
        type: RATE_DECREASE,
        payload: value - 1
    });
}

export const getTimeline = () => async dispatch => {
    try {        
        const resp = await fetch('http://localhost:8080/get-events/')
        const timeline = await resp.json()
        return dispatch({
            type: TIMELINE_LOADS,
            payload: timeline.timeline
        });
    } catch (error) {
        return dispatch({
            type: TIMELINE_ERROR,
            payload: error
        });
    }
}

export const getAutocomplete = (value) => async dispatch => {
    try {
        const resp = await fetch('http://localhost:8080/search-event/'+value)
        const autocomplete = await resp.json()
        console.log(await autocomplete)
        return dispatch({
            type: AUTOCOMPLETE_LOADS,
            payload: autocomplete
        });
    } catch (error) {
        return dispatch({
            type: AUTOCOMPLETE_ERROR,
            payload: error
        });
    }
}