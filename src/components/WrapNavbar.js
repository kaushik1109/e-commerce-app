import React from 'react'

const WrapNavbar = () => {
  return (
    <div className='option-wrap'>
      <div className='wrap-navbar'>Filter By</div>
      <div className='wrap-navbar'>No Filter</div>
      <div className='wrap-navbar'>Mobile</div>
      <div className='wrap-navbar'>Laptop</div>
      <div className='wrap-navbar'>Tablet</div>
      <div className='wrap-navbar'>{">="}29999</div>
      <div className='wrap-navbar'>{">="}49999</div>
      <div className='wrap-navbar'>{">="}69999</div>
      <div className='wrap-navbar'>{">="}89999</div>
    </div>
  )
}

export default WrapNavbar
