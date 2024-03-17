import React, { useEffect } from 'react'
import { useState } from 'react';
import { CategoryList } from './CategoryList';

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




  const [selectedCategoryName, setSelectedCategoryName] = useState()
  const [categorisedProducts, setCategorisedProducts] = useState([])


const onSelectCategory = (clickedCategoryName) =>{
//  const filterProducts = products.filter( (item) => 
//     item.categoryId === clickedCategoryId);
//     setSelectedProducts(filterProducts)
// console.log(clickedCategoryName)
setSelectedCategoryName(clickedCategoryName)

  
}

// inside useEffect it execute the thing
// with browser loading instantly


useEffect(()=>{

  const fetchProducts =  async () => {

    try{
   

      const response =  await fetch(`https://fakestoreapi.com/products/category/${selectedCategoryName}`)
    
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const product = await response.json()
      setCategorisedProducts(product)
      console.log(product)

    } catch (error){
      console.log(error)
    }

   
  }
  fetchProducts()

},[selectedCategoryName] )


  
  
  return (
    <div className="home">
        <CategoryList 
          categories = {categories}
          title = "All Categories"
          onSelectCategory = {onSelectCategory}
        />
        <div className='products-container'>
        {
          categorisedProducts.map((product)=>(

            <div key={product.id} className='product-box'> 
              {product.title}
            
            </div>

          ))
        }
        
        </div>
       
    </div>
  )
}

