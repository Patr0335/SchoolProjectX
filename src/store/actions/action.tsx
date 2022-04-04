import {ADDITION, SUBTRACTION} from '../actionTypes';

export const addition = () => ({
    type: ADDITION,
    payload: 1
});

export const subtraction = () => ({
    type: SUBTRACTION,
    payload: 1
});