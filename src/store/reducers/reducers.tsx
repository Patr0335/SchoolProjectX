import {ADDITION, SUBTRACTION} from '../actionTypes';


const initialState = {
    counter: 0,
};

export const mainReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADDITION:
        return{...state, counter: state.counter + action.payload};

        case SUBTRACTION:
            return{...state, counter: state.counter - action.payload};
            default:
                return state;
    }
};