import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className='sticky-top'>
    <div className="navbar">

    <Link to={'/'}   className='logo'>ECART</Link>
    <div className='search'>
        <input type='text'  placeholder='Search for Products' />
    </div>
    <Link to={'/cart'} className='cart'>CART</Link>


    </div>
    </header>
    
    
    </>
  )
}

export default Navbar
