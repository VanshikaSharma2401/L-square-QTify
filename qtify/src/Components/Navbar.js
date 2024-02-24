import React from 'react'
import Search from './Search'
import Button from './ButtonComponent'
const Navbar = () => {
  return (
    <div className='navbar'>
    <img src="../../assets/qtifyLogo.svg" alt="qtify logo"/>
     <Search/>
     <Button text={"Give Feedback"}/>
    </div>
  )
}

export default Navbar
