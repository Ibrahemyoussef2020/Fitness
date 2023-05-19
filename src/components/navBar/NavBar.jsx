import {Link } from 'react-router-dom'
import Nav from './NavBarStyle'

const NavBar = () => {
return (
    <Nav>
        <Link to='Classes'>Classes</Link>
        <Link to='/'>Back to Home</Link>
        <Link to='Clients'>Clients</Link>
    </Nav>
)
}

export default NavBar