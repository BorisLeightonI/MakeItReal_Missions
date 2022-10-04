import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home({randNums}) {
  const [products, setProducts] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const randNum = [];
  const setNum = (array) => {
    for (let i = 0; i < array.length; i++) {
      randNum.push(Math.floor(Math.random()*100));
    }
    setNumbers(...randNum);
  }
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setNum(json);
              console.log('numeros:', numbers);
              console.log('productos:', json)
              setProducts(json);
            })
  },[]);
  return <>
    <h1>Productos</h1>
    <div class="app-prod">
    
      { products.map((prod, i)=>{
        return <Card key={prod.id} prod={prod} num={numbers[i]} num2={randNums[i]} now={new Date().getMilliseconds()} />
        }) 
      }
    </div>
  </>;
}

export default Home;