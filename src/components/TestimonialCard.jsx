import Card from './Card'


function TestimonialCard({ name, role, company, comment, avatar }) {
  return (
    <Card className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-header">
          <img src={avatar} alt={name} className="testimonial-avatar" />
          <div>
            <h4 className="testimonial-name">{name}</h4>
            <p className="testimonial-role">{role} en {company}</p>
          </div>
        </div>
        <p className="testimonial-comment">"{comment}"</p>
        <div className="testimonial-rating">
          {'★'.repeat(5)}
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard