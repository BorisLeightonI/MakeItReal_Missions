import { useSelector } from "react-redux"

const Text = () => {
  const username = useSelector(state => state.text.username)

  return (
    <h2>{username}</h2>
  )
}

export default Text