import React from 'react'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>web<span>Dash</span></h1>
        <div className="links">
            <a href="">Home</a>
            <a href="" style={{
                color:'white',
                backgroundColor:"#f1356d"
            }}>Sign Up</a>
        </div>
    </nav>
  )
}