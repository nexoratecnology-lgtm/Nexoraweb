import Button from './Button'
import { Link } from 'react-router-dom'
import hero from "../assets/icons/images/hero-bg.png"
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Innovación Tecnológica <span className="highlight">Confiable</span>
            </h1>
            <p className="hero-description">
              Transformamos ideas en soluciones digitales robustas y seguras. 
              Lideramos el futuro tecnológico con experiencia y compromiso.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="large"><Link to="./services">Conoce Nuestros Servicios</Link></Button>
              <Button variant="outline" size="large"><Link to="./contact" style={{
                listStyle: "none",
                color: "white"
              }}>Solicita una consulta</Link></Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration"><img 
  src={hero} 
  alt="" 
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el recuadro
    display: 'block'
  }} 
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero