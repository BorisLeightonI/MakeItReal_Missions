import { useState } from "react"
import { useSelector } from "react-redux"

const Counter = () => {
  const dataCounter = useSelector((state) => state.count)

  return (
    <div>
      <h2>{dataCounter}</h2>
    </div>
  )
}

export default Counter