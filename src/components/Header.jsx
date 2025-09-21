import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import './Header.css'
import logo from "../assets/icons/images/Logo.png"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
            <img src={logo} style={{
    width: '29px',
    paddingRight: "10px",
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el recuadro
    display: 'block'
  }}  alt="" srcset="" />
              <span className="logo-text">Nexora</span>
            </Link>
            
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/about" className="nav-link">Sobre Nosotros</Link>
              <Link to="/services" className="nav-link">Servicios</Link>
              <Link to="/contact" className="nav-link">Contacto</Link>
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header