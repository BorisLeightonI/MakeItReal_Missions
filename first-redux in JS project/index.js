const { createStore } = require("redux");

/**Store */
const stateInit = {
    count: 0,
}

const reducer = (state = stateInit, action) => {
    switch (action.type) {
        case 'increase':
            return {...state, count: state.count + action.payload}
        case 'decrease':
            return {...state, count: state.count - action.payload}
    
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(()=>console.log(store.getState()));

store.dispatch({type: 'increase', payload: 2});
store.dispatch({type: 'increase', payload: 2});
store.dispatch({type: 'increase', payload: 2});
store.dispatch({type: 'decrease', payload: 2});