import { createAction, createReducer } from "@reduxjs/toolkit"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

const initialState = {
  count: 0
}

const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT);

const countReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state, action)=>{
        return ++state;
    }).addCase(decrement, (state, action)=>{
        return --state;
    }).addDefaultCase((state, action) => state.count)
});

/* const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
 */
// export default countReducer