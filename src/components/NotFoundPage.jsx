import React from 'react'
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='content'>
    <h1>
    
    Not Found !
    
    </h1>

    <p>
    You are looking for something that does not exist
    </p>
    <button  > <Link to={"/"}> Return to Home</Link></button>

    </div>
  )
}
