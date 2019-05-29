import * as actionTypes from '../Actions';

const initialState = {
    results: []
}

const ResultState = (state= initialState, action) => {
    if(action.type === actionTypes.STORE_RESULTS) {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        };
    };
    if(action.type === actionTypes.DELETE_RESULT) {
        const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
}
export default ResultState;