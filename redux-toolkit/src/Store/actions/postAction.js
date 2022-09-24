import axios from "axios"
import { postError, postLoading, postSucces } from "../Reducers/PostSlice"

export const getPosts = () => {
    return (dispatch) => {
      dispatch(postLoading(true))
        axios.get("https://jsonplaceholder.typicode.com/todos/")
          .then((res) => {
            dispatch(postSucces(res.data))
          })
          .catch((error) => {
            dispatch(postError(error))
          })
          .finally(() => {
            dispatch(postLoading(false))
          })
  }
}