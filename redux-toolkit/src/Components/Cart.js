import { useSelector } from "react-redux";

function Cart() {

  const cart = useSelector(store => store.cart.cart)
  
    return (
<div>
  
  <h2>{typeof cart}</h2>
  <ul>
      {cart.map((x,i) => <li key={i}>{i}: {x}</li>)}
  </ul>
</div>
    )
}

export default Cart;