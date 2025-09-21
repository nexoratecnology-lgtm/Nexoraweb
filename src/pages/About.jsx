import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">Sobre Nexora</h1>
          <p className="page-subtitle">
            Conoce nuestra historia, misión y los valores que nos guían
          </p>
        </div>
      </section>
      
      <section className="about-mission section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Nuestra Misión</h2>
              <p>
                En Nexora, nuestra misión es transformar las empresas mediante soluciones tecnológicas 
                innovadoras y confiables. Nos comprometemos a ser el socio estratégico que impulsa el 
                crecimiento digital de nuestros clientes, garantizando seguridad, eficiencia y resultados medibles.
              </p>
              <p>
                Creemos en el poder de la tecnología para resolver problemas complejos y crear oportunidades 
                de negocio que antes eran imposibles. Cada proyecto es una oportunidad para demostrar nuestro 
                compromiso con la excelencia y la innovación.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-illustration">
                <img   style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el recuadro
    display: 'block'
  }} src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-vision section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-image">
              <div className="vision-illustration">
                    <img   style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajusta la imagen para cubrir el recuadro
    display: 'block'
  }} src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" srcset="" />
        
              </div>
            </div>
            <div className="vision-text">
              <h2 className="section-title">Nuestra Visión</h2>
              <p>
                Aspiramos a ser reconocidos globalmente como líderes en soluciones tecnológicas, 
                estableciendo nuevos estándares de innovación y confiabilidad en la industria. 
                Visualizamos un futuro donde cada empresa, sin importar su tamaño, pueda acceder 
                a tecnología de vanguardia para competir y prosperar en la economía digital.
              </p>
              <p>
                Nuestra visión se extiende más allá del éxito empresarial; buscamos crear un impacto 
                positivo en la sociedad a través de la tecnología responsable y sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integridad</h3>
              <p>Actuamos con honestidad y transparencia en todas nuestras interacciones.</p>
            </div>
            <div className="value-card">
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de resolver desafíos tecnológicos.</p>
            </div>
            <div className="value-card">
              <h3>Excelencia</h3>
              <p>Nos comprometemos con la calidad en cada proyecto que emprendemos.</p>
            </div>
            <div className="value-card">
              <h3>Colaboración</h3>
              <p>Trabajamos en equipo y con nuestros clientes para alcanzar el éxito.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-team section">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Contamos con un equipo de expertos apasionados por la tecnología
          </p>
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Profesionales</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10</div>
              <div className="stat-label">Países</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About