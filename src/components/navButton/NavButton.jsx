import React from 'react'
import  NavList from './NavButtonStyle'

const NavButton = ({setIsOpen}) => {
    const handleToggle = ()=>{
        console.log('yes') ;
         setIsOpen(open => !open)
    }
  return (
        <NavList handleToggle={handleToggle} />      
  )
}

export default NavButton