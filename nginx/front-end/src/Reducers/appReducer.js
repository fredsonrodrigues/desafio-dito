import { 
    TIMELINE_LOADS, 
    TIMELINE_ERROR, 
    AUTOCOMPLETE_LOADS,
    AUTOCOMPLETE_ERROR
} from "../Actions/actionTypes";

const INITIALSTATE = {
    rate: 0,
    autocomplete: [],
    timeline: [],
    error: null
}

const AppReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case TIMELINE_LOADS:
            return { ...state, timeline: action.payload }
        case TIMELINE_ERROR:
            return { ...state, error: action.payload, timeline: [] }
        case AUTOCOMPLETE_LOADS:
            return { ...state, autocomplete: action.payload }
        case AUTOCOMPLETE_ERROR:
            return { ...state, error: action.payload, autocomplete: [] }
        default:
            return state
    }
}

export {AppReducer}