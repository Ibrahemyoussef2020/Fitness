import {Link } from 'react-router-dom'
import Nav from './NavBarStyle'
import NavButton from '../navButton'
import { useState } from 'react'

import './NavBar.css'
const NavBar = () => {
    const [isOpen , setIsOpen] = useState(false)
return (
    <Nav>
        <NavButton  setIsOpen={setIsOpen}/>
        <div className={` nav ${isOpen ? 'openedNav':'closedNav'}`}>
            <Link to='/'>
                <img src="images/icons/white-home-bg-pan-icon.png" alt="" />
                <span>Home</span>
            </Link>
            <Link to='Classes'>
                <img src="images/icons/white-dumbbell-bg-pan-gym.png" alt="" />
                <span>Classes</span> 
            </Link>
            <Link to='Clients'>
                <img src="images/icons/white-half-man-icon.png" alt="" />
                <span>Clients</span>
            </Link>
        </div>
    </Nav>
)
}

export default NavBar