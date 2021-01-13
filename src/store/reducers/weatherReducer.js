import produce from 'immer';

export const ACTION_TYPES = {
    GET_CURRENT_RESULTS: "GET_CURRENT_RESULTS",
    GET_DAILY_RESULTS: "GET_DAILY_RESULTS",
}

export const initialState = {
    currentResults: {},
    dailyResults: [],
    error: '',
}

const weatherReducer = (state = initialState, action) =>

    produce(state, (draft) => {

        switch (action.type) {
            case ACTION_TYPES.GET_CURRENT_RESULTS:
                draft.currentResults = action.payload
                break;
            case ACTION_TYPES.GET_DAILY_RESULTS:
                draft.dailyResults = action.payload
                break;

            default:
                break;
        }
    }
    )

export default weatherReducer;
