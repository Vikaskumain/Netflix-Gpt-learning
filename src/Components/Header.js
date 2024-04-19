import React from 'react'
import Netfilx_logo from "../Images/Netflix_Logo.png"

function Header() {
  return (
    <div className='absolute px-20 py-3 bg-gradient-to-b from-black  z-10'>
    <img className='w-44' src={Netfilx_logo} alt=' logo'/>
    </div>
  )
}

export default Header
