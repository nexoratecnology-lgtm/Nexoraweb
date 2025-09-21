import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Nexora</h3>
            <p className="footer-description">
              Líderes en soluciones tecnológicas innovadoras y confiables para tu negocio.
            </p>
       
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/services">Servicios</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Servicios</h4>
            <ul className="footer-links">
              <li><a href="/services">Desarrollo de Software</a></li>
              <li><a href="/services">Soluciones en la Nube</a></li>
              <li><a href="/services">Ciberseguridad</a></li>
              <li><a href="/services">Consultoría Tecnológica</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <ul className="contact-info">
              <li>📧 nexoratecnology@gmail.com</li>
              <li>📞 +55 3346 5069</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Nexora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer