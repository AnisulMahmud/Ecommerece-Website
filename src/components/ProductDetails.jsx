import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchSingleProduct } from '../hooks/useFetchSingleProduct';

export const ProductDetails = () => {

    const {id} = useParams();

    const [product, isLoading, error] = useFetchSingleProduct(id);
    console.log(product);

    if(isLoading){
        return <div className='loader'></div>
    }

    console.log(id);
  return (
   <div className='product-details'>

   <div className='product-image'>
     <img src={product.image} alt={product.title}/>
   </div>
    <div className='product-info'>
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p className='price'>Price: {product.price} $</p>
    <p>{product.rating.rate}* ({product.rating.count} reviews)</p>
    <button className='add-to-cart'> Add to Cart</button>
    </div>
   
   </div>
  )
}
