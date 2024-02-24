import React from 'react'
import Search from './Search'
import Button from './ButtonComponent'
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={logo} alt="qtify logo"/>
     <Search/>
     <Button text={"Give Feedback"}/>
    </div>
  )
}

export default Navbar
