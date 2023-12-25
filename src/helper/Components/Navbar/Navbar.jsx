import "./Navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
<NavLink to="/">HOME</NavLink>
<NavLink to="/about">ABOUT</NavLink>
<NavLink to="/projects">PROJECTS</NavLink>
<NavLink to="/contact">CONTACT</NavLink>
    </nav>
  )
}

export default Navbar