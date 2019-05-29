import * as actionTypes from '../Actions';

const initialState = {
    counter: 0
}

const CounterState = (state= initialState, action) => {
    if(action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }; 
    };
    if(action.type === actionTypes.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        };
    };
    if(action.type === actionTypes.INCREMENTFIVE) {
        return {
            ...state,
            counter: state.counter + action.value
        };
    };
    if(action.type === actionTypes.DECREMENTFIVE) {
        return {
            ...state,
            counter: state.counter - action.value
        };
    };
    return state;
}
export default CounterState;