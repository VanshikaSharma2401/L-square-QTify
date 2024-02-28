import React from 'react'
import Search from './Search'
import Button from './ButtonComponent'
import Logo from './Logo'
import styles from "../../src/styles.module.css"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Logo Img={logo}/>
     <Search/>
     <Button text={"Give Feedback"}/>    
    </div>
  )
}

export default Navbar
