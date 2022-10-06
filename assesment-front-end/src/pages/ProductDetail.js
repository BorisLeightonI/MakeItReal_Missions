import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const { prodId } = useParams();

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${prodId}`)
            .then(res=>res.json())
            .then(json=>{
              setProduct(json);
              // console.log('producto:', json)
            })
  },[]);


  return <>
    <h1>Product detail page, id: {prodId} </h1>
    <div className='card'>
      <h3>{product.title}</h3>
      <h4>Category: {product.category} </h4>
      <h4>Price: {product.price} </h4>
      {/* <h6>Rate: {product.rating.rate} of {product.rating.count} </h6> */}
      <img src={product.image} alt='imagen' width='100px' loading="lazy"/>
      <p>{product.description}</p>

    </div>
  </>;
}

export default ProductDetail;