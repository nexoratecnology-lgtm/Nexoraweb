import { useState } from 'react'
import Button from '../components/Button'
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Configura los parámetros que enviarás
  const templateParams = {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    phone: formData.phone,
    message: formData.message,
  };

  // Enviar email usando EmailJS
  emailjs.send(
    'service_moy5n36',   // Reemplaza con tu Service ID
    'template_guui0sf',  // Reemplaza con tu Template ID
    templateParams,
    'iTAVENc8IZkD9BRyA'    // Reemplaza con tu Public Key
  )
  .then((response) => {
    console.log('Correo enviado!', response.status, response.text);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  })
  .catch((err) => {
    console.error('Error al enviar el correo:', err);
    setIsSubmitting(false);
    // Opcional: mostrar mensaje de error al usuario
  });
};
280423
  const contactInfo = [

    {
      icon: '📧',
      title: 'Email',
      details: 'nexoratecnology@gmail.com'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      details: '+55 3346 5069'
    },

  ]

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. ¡Hablemos sobre tu proyecto!
          </p>
        </div>
      </section>
      
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Información de Contacto</h2>
              <p className="contact-description">
                Puedes comunicarte con nosotros a través de cualquiera de estos medios. 
                Nuestro equipo de expertos está listo para ayudarte.
              </p>
              
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3 className="info-title">{info.title}</h3>
                      <p className="info-details">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            
            </div>
            
            <div className="contact-form">
              <h2 className="section-title">Envíanos un Mensaje</h2>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label htmlFor="name">Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Empresa</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large"
                    disabled={isSubmitting}
                    onSubmit
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cuál es el tiempo promedio de desarrollo?</h3>
              <p>El tiempo de desarrollo varía según la complejidad del proyecto. En promedio, 
              un proyecto web toma entre 2-4 meses, mientras que una aplicación móvil puede 
              tardar entre 3-6 meses.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Ofrecen soporte post-lanzamiento?</h3>
              <p>Sí, ofrecemos diferentes planes de soporte y mantenimiento que incluyen 
              actualizaciones, monitoreo y asistencia técnica continua.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Trabajan con startups?</h3>
              <p>Absolutamente. Tenemos experiencia trabajando con startups y empresas de 
              todos los tamaños. Adaptamos nuestras soluciones a tus necesidades y presupuesto.</p>
            </div>
            
            <div className="faq-item">
              <h3>¿Cómo garantizan la seguridad?</h3>
              <p>Implementamos las mejores prácticas de seguridad en cada fase del desarrollo, 
              desde el diseño hasta el despliegue, incluyendo cifrado de datos y auditorías 
              de seguridad regulares.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact