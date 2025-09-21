import './Button.css'

function Button({ children, variant = 'primary', size = 'medium', onClick, type = 'button' }) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button