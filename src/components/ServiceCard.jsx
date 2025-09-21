import Card from './Card'
import Button from './Button'
import { Link } from 'react-router-dom'
function ServiceCard({ icon, title, description, link }) {
  return (
    <Card className="service-card">
    
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      
      <Button variant="outline" size="small" >
       
       <Link to="/contact" style={{
        listStyle: "none"
       }}>Saber Mas</Link>
        </Button>
    </Card>
  )
}

export default ServiceCard