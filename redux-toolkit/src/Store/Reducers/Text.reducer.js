import { createReducer } from "@reduxjs/toolkit"

const CHANGE_TEXT = "CHANGE_TEXT"

//action creator
export const changeText = (value) => {

  return {
    type: CHANGE_TEXT,
    payload: value
  }
}

const initialState = {
  username: ""
}

const textReducer = createReducer(initialState, builder =>{
  builder.addCase(CHANGE_TEXT, (state, action)=>{
    return {
      ...state,
      username: action.payload
    }
  }).addDefaultCase((state, action)=>state)
})
/* const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
} */

export default textReducer