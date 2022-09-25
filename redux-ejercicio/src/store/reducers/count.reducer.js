export const ADD = 'add';
export const RES = 'res';
export const MULT = 'mult';
export const DIV = 'div';

const initialState = { count: 0 }

const countReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, count: state.count + 2}
        case RES:
            return {...state, count: state.count - 2}
        case MULT:
            return {...state, count: state.count*2}
        case DIV:
            return {...state, count: state.count/2}
        default:
            return state;
    }
}

export default countReducer;