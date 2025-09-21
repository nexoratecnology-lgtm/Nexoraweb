import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import './Services.css'
import { Link } from 'react-router-dom'
function Services() {
  const services = [
    {
      icon: '/src/assets/icons/code.svg',
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos aplicaciones web, móviles y de escritorio personalizadas que se adaptan perfectamente a las necesidades de tu negocio.',
      features: [
        'Análisis y diseño de requisitos',
        'Desarrollo ágil y escalable',
        'Integración con sistemas existentes',
        'Mantenimiento y soporte continuo'
      ]
    },
    {
      icon: '/src/assets/icons/cloud.svg',
      title: 'Soluciones en la Nube',
      description: 'Diseñamos e implementamos estrategias cloud que optimizan tus operaciones y reducen costos.',
      features: [
        'Migración a la nube segura',
        'Gestión de infraestructura',
        'Optimización de costos',
        'Monitoreo 24/7'
      ]
    },
    {
      icon: '/src/assets/icons/security.svg',
      title: 'Ciberseguridad Integral',
      description: 'Protegemos tus activos digitales con soluciones de seguridad avanzadas y proactivas.',
      features: [
        'Evaluación de vulnerabilidades',
        'Implementación de firewalls',
        'Cifrado de datos',
        'Capacitación en seguridad'
      ]
    },
    {
      icon: '/src/assets/icons/consulting.svg',
      title: 'Consultoría Tecnológica',
      description: 'Asesoramos a tu empresa en la transformación digital y optimización de procesos.',
      features: [
        'Diagnóstico tecnológico',
        'Planificación estratégica',
        'Selección de tecnologías',
        'Gestión del cambio'
      ]
    },
     {
      icon: '/src/assets/icons/code.svg',
      title: 'Automatización digital',
      description: 'Optimizamos procesos repetitivos mediante tecnología inteligente, reduciendo errores y aumentando la productividad de tu empresa.',
      features: [
"Eficiencia inmediata en tareas manuales.",

"Integración fluida entre sistemas y apps.",

"Escalabilidad sin límites para tu negocio.",

"Monitoreo en tiempo real con métricas claras.",
      ]
    },
     {
      icon: '/src/assets/icons/cloud.svg',
      title: 'Inteligencia digital',
      description: '"Potencia tu negocio con inteligencia artificial avanzada que automatiza procesos, optimiza decisiones y mejora la experiencia del cliente.',
      features: [
"Automatización inteligente",

"Análisis predictivo",

"Personalización",

"Integración fácil",
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Análisis y Diagnóstico',
      description: 'Evaluamos tus necesidades y objetivos para diseñar la solución perfecta.'
    },
    {
      step: '02',
      title: 'Diseño y Planificación',
      description: 'Creamos un plan detallado con plazos, recursos y entregables definidos.'
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Desarrollamos e implementamos la solución con metodologías ágiles.'
    },
    {
      step: '04',
      title: 'Soporte y Evolución',
      description: 'Acompañamos tu crecimiento con mantenimiento continuo y mejoras.'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="page-title">Nuestros Servicios</h1>
          <p className="page-subtitle">
            Soluciones tecnológicas integrales para impulsar tu negocio
          </p>
        </div>
      </section>
      
      <section className="services-list section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
                <div className="service-features">
                  <h4>Características principales:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="process-section section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
          <p className="section-subtitle">
            Metodología probada para garantizar el éxito de cada proyecto
          </p>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-item">
                <div className="process-step">{item.step}</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="tech-stack section">
        <div className="container">
          <h2 className="section-title">Tecnologías que Dominamos</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-list">
                <span>React</span>
                <span>Vue.js</span>
                <span>Angular</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-list">
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>.NET</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Cloud</h3>
              <div className="tech-list">
                <span>AWS</span>
                <span>Azure</span>
                <span>Google Cloud</span>
                <span>Docker</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Base de Datos</h3>
              <div className="tech-list">
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Redis</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para empezar tu proyecto?</h2>
            <p className="cta-description">
              Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <Button variant="primary" size="large"><Link to="/contact">Conoce Nuestros Servicios</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services