import { useSelector } from "react-redux"

const Text = () => {
  const username = useSelector(store => store.texts.username)

  return (
    <h2>{username}</h2>
  )
}

export default Text