import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [searchTerm,setSearchTerm]=useState("")
  const navigate=useNavigate()

  const handleSubmit=(e) =>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <>
    <header className='sticky-top'>
    <div className="navbar">
    
    <Link to={'/'}   className='logo'>ECART</Link>
    <div className='search'>
      <form onSubmit={handleSubmit} >
        <input type='text'  placeholder='Search for Products' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
        </form>
    </div>
    <Link to={'/cart'} className='cart'>CART</Link>


    </div>
    </header>
    
    
    </>
  )
}

export default Navbar
