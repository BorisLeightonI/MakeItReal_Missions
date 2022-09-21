import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../Store/Reducers/Text.reducer"

const InputText = () => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.username)


  return (
    <input
      type={"text"}
      onChange={(e) => dispatch(changeText(e.target.value))}
      value={username}
    />
  )
}

export default InputText