import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({prod, num}) {
  const [time, setTime] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>tick(), 1000);
    return ()=>clearInterval(timer);
  }, [])

  const tick = () => setTime(time => ++time)
  
  return <>
    <div className="card__container">
      {time-num>=0 
        ? <h3> {prod.title} </h3>
        : <Link to = {`/prodDetail/${prod.id}`}>
            <h3> {prod.title} </h3>
          </Link>
      }
{/*       <h5>time {time}</h5>
      <h5>num {num}</h5> */}
      {time-num>=0 ? null :<p>Termina en: {time-num} segundos</p>}
      <p>Condición: {time-num>=0?'Expirado':'Habilitado'}</p>
      <h5>Categoría: {prod.category} </h5>
      <h5>Precio: {prod.price} </h5>
      <img src={prod.image} alt='imagen' width='100px' loading="lazy"/>

    </div>
  </>;
}

export default Card;