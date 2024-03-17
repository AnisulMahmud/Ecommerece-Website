import React, { useEffect } from 'react'
import { useState } from 'react';
import { CategoryList } from './CategoryList';
import { useFetchProducts } from '../hooks/useFetchProducts';


export const Home = () => {
  const categories = [
    {
      id: 1,
      name: "electronics"

    },
    {
      id: 2,
      name: "jewelery"

    },
    {
      id: 3,
      name: "men's clothing"

    },
    {
      id: 4,
      name: "women's clothing"

    }
    
  ]


// default state for category is electronics
  const [selectedCategoryName, setSelectedCategoryName] = useState('electronics')

  const [categorisedProducts, isLoading, error] =  useFetchProducts(selectedCategoryName)



const onSelectCategory = (clickedCategoryName) =>{
setSelectedCategoryName(clickedCategoryName)

  
}


  return (
    <div className="home">
        <CategoryList 
          categories = {categories}
          title = "All Categories"
          onSelectCategory = {onSelectCategory}
        />
        <div className='products-container'>
        {
          error && 
          <div> {error} </div>
        }
        {
          isLoading  ? <div className='loader'></div> : 
          categorisedProducts.map((product)=>(

            <div key={product.id} className='product-box'> 
              <img src = {product.image} alt={product.name} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className='price'>Price: {product.price} $</p>
              <p>{product.rating.rate}* ({product.rating.count} reviews)</p>
              <button> See Details</button>

            
            </div>

          ))
        }
        
        </div>
       
    </div>
  )
}

