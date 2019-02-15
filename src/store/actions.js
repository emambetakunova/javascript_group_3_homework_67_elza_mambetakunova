export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const ENTER = 'ENTER';

export const addNumber = number => {
    return {type: ADD, number};
};

export const removeNumber = () => {
    return {type: REMOVE};
};

export const enterNumber = () => {
    return {type: ENTER};
};