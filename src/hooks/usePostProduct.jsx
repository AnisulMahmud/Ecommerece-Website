
import React from 'react'
import {useState } from 'react'

export const usePostProduct = () => {

    const [product, setProduct] = useState(null)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)


    const addProduct = async (product) =>{
        setLoading(true)

        try{

            const response = await fetch("https://fakestoreapi.com/products/", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })

            if(!response.ok){
                setLoading(false)
                throw new Error("Cant add the new Product data")
            }

            const data = await response.json()
            console.log("From add product $(data)")
            setProduct(data)
            setLoading(false)


        }
        catch(error){
            setError("Cant add the new Product data")
            setLoading(false)

        }

    }

    return { addProduct, product, error, loading }
}
