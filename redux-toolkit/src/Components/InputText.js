import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../Store/Reducers/TextSlice"


const InputText = () => {
  const dispatch = useDispatch()
  const username = useSelector(store => store.texts.username)


  return <input
          onChange={(e) => dispatch(changeText(e.target.value))}
          value={username} />
}

export default InputText