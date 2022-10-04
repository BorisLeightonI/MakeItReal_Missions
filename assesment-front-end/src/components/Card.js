import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import './Card.css'
function Card({prod, num, num2, now}) {
  const rand = Math.floor(Math.random()*100);
  // const now = new Date().getMilliseconds();
  const [time, setTime] = useState(new Date().getSeconds());

  const tick = () => {
    setTime(new Date().getSeconds())
    // console.log(typeof time);
  }

  useEffect(()=>{
    const timer = setInterval(()=>tick(), 1000);
    return ()=>clearInterval(timer);
  })
  
  return <>
    <div className="card__container">
      {
        time-num2>=0 
        ? <h3> {prod.title} </h3>
        : <Link to = {`/prodDetail/${prod.id}`}>
            <h3> {prod.title} </h3>
          </Link>
      }
      {/* <h5>Random {rand}</h5> */}
      {/* <h5>time {time}</h5> */}
      {/* <h5>num {num}</h5> */}
      {/* <p>num2 {num2}</p> */}
      {/* <p>now {now}</p>   */}
      {
        time-num2>=0 ? null :<p>Termina en: {time-num2} segundos</p>
      }
      <p>Condición: {time-num2>=0?'Expirado':'Habilitado'}</p>
      <h5>Categoría: {prod.category} </h5>
      <h6>Precio: {prod.price} </h6>
      <img src={prod.image} alt='imagen' width='100px' loading="lazy"/>

    </div>
  </>;
}

export default Card;