import { useSelector } from "react-redux"

const Counter = () => {
  
  const dataCounter = useSelector((reducer) => {
    console.log('Counter -> reducer:', reducer);  
    return reducer.counts.count
  })

  return <h2>{dataCounter}</h2>
}

export default Counter;