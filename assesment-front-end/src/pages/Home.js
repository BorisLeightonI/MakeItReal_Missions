import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const randNum = [];
  const setNum = (array) => {
    for (let i = 0; i < array.length; i++) {
      randNum.push(Math.floor(Math.random()*(100-60)+60));
    }
    setNumbers([...randNum]);
  }
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setNum(json);
              setProducts(json);
            })
  },[]);
  return <>
    <h1>Productos</h1>
    <div className="app-prod">
      { products.map((prod, i) => <Card key={prod.id} prod={prod} num={numbers[i]}  />)}
    </div>
  </>;
}

export default Home;