import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  const services = [
    {
      icon: '/src/assets/icons/code.svg',
      title: 'Desarrollo de Software',
      description: 'Creamos aplicaciones personalizadas que impulsan tu negocio hacia el futuro.'
    },
    {
      icon: '/src/assets/icons/cloud.svg',
      title: 'Soluciones en la Nube',
      description: 'Migración y gestión de infraestructura cloud para máxima escalabilidad.'
    },
    {
      icon: '/src/assets/icons/security.svg',
      title: 'Ciberseguridad',
      description: 'Protección integral de tus activos digitales contra amenazas modernas.'
    },
    {
      icon: '/src/assets/icons/consulting.svg',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento experto para optimizar tus procesos tecnológicos.'
    }
  ]



  return (
    <div className="home-page">
      <Hero />
      
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa
          </p>
          <div className="grid grid-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      

      
    
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para transformar tu negocio?</h2>
            <p className="cta-description">
              Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <Button variant="primary" size="large"><Link to="./contact" style={{
                listStyle: "none",
                color: "white"
              }}>Solicita una consulta</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home