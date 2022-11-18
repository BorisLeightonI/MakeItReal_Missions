import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../Store/Reducers/CartSlice"
import { changeText } from "../Store/Reducers/TextSlice"


const InputToCart = () => {
  const [cart, setCart] = useState({cart: ''})
  const dispatch = useDispatch()
  

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(cart)
  dispatch(addToCart(cart))
}
const handleChange = (e) => {
  const {name, value} = e.target
  setCart({
    ...cart,
    [name]: value
  })
}
  return <form onSubmit={handleSubmit}>
          <input
            name="cart"
            onChange={handleChange}
           />
          <button>Add to Cart</button>
        </form>
}

export default InputToCart