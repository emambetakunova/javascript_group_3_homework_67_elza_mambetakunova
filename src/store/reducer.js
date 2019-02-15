import {ADD, REMOVE, ENTER} from "./actions";

const initialState = {
    pinCode: '',
    isCorrect: '',
    actualPinCode: '1111',
    str: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const newState = {...state};
            if (!state.str.includes('*') && state.str !== '') {
                newState.str = '*';
                newState.isCorrect = '';
                newState.pinCode = action.number;
                return newState;
            }
            if (state.pinCode.length === 4) {
                return newState
            }
            return {...state, pinCode: state.pinCode + action.number, str: state.str + '*'};

        case REMOVE:
            const str = state.str.substr(0, state.str.length - 1);
            return {
                ...state,
                pinCode: str
            };
        case ENTER:
            if (state.actualPinCode === state.pinCode) return {...state, isCorrect: 'success', str: 'Access Granted!'};
            else return {...state, isCorrect: 'error', str: 'Access denied!'};

        default:
            return state
    }


};

export default reducer;