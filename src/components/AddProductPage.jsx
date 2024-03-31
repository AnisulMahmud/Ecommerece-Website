import React from 'react'
import { usePostProduct } from '../hooks/usePostProduct'
import {useFormik} from 'formik'
import * as Yup from 'yup'


// formik(working with the form) and yup( for validation)

const valueSchema = {
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
    
}

export const AddProductPage = () => {
    const {addProduct, product, error, loading} = usePostProduct()
    console.log(product)
    const formik = useFormik({
        initialValues: valueSchema,
        validationSchema: Yup.object({
            title: Yup.string() .min(3, 'Must be 3 characters or more').matches(/^[A-Za-z]+$/, "Must not include numbers").required('Required'),
            price: Yup.number().min(1, 'Must be 1 or more').required('Required'),
            description: Yup.string().required('Required'),
            image: Yup.string().required('Required'),  
            category: Yup.string().required('Required'),

        }),

        onSubmit: (values) => {
           addProduct(values)
        }
    })

  

  return (
    <div>

   
    <form onSubmit={formik.handleSubmit}>
    <h1> Add a product</h1>
    <
    input 
    onChange= {formik.handleChange}
    value= {formik.values.title}
    onBlur={formik.handleBlur}
    type='text' 
    id='title' 
    placeholder='Product Title'
    />
    {
        formik.touched.title && formik.errors.title ?
         <div>{formik.errors.title}</div> : null
    }
    
    <input 
    onChange= {formik.handleChange}
    value={formik.values.price}
    onBlur={formik.handleBlur}
    type='number' 
    id='price'
     placeholder='price'
     />
     {
        formik.touched.price && formik.errors.price ?
         <div>{formik.errors.price}</div> : null
     }

    <input 
    onChange= {formik.handleChange} 
    value={formik.values.description}
    onBlur={formik.handleBlur}
    type='text' 
    id='description' 
    placeholder='description'
    />
    {
        formik.touched.description && formik.errors.description ?
         <div>{formik.errors.description}</div> : null
    }
    
    <input 
    onChange= {formik.handleChange} 
    value={formik.values.image}
    onBlur={formik.handleBlur}
    type='text' 
    id='image' 
    placeholder='image'
    />
    {
        formik.touched.image && formik.errors.image ?
         <div>{formik.errors.image}</div> : null
    }

    <input 
    onChange= {formik.handleChange} 
    value={formik.values.category}
    onBlur={formik.handleBlur}
    type='text' 
    id='category' 
    placeholder='category'
    />
    {
        formik.touched.category && formik.errors.category ?
         <div>{formik.errors.category}</div> : null
    }
    <button type='submit'>Add Product</button>
    </form>


    </div>
  )
}

