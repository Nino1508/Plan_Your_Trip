
import { useEffect, useState } from 'react'
import './Menu.css'

function App() {
/* Esto es para la hora */
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()),1000);
    return () => clearInterval(timer);
  },[]);

  const formatNumber = (num) => String(num).padStart(2,'0');

/* Esto es para el despliegue de la hamburgesa */
  
const [isOpen, setIsOpen] = useState(false);

const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="menu">
        {isOpen && (
        <nav className="menu-items">
          <ul>
            <li>Alojamiento</li>
            <li>Gastronomía</li>
            <li>Tours</li>
            <li>Transporte</li>
            <li>Presupuesto</li>
          </ul>
        </nav>
        )}
        <button    className={`menu-button ${isOpen ? 'open' : ''}`}
        onClick={handleMenuClick}>
          <span></span>
        </button>

        <div className="text">Menu</div>

        <div className="date">
          <span className="month">{date.toLocaleString('default', { month: 'long' })}</span>{' '}
          <span className="day">{date.getDate()}</span>,{' '}
          <span className="year">{date.getFullYear()}</span>

          <div className="time">
            <span className="hours">{formatNumber(date.getHours()) }:</span>
            <span className="minutes">{formatNumber(date.getMinutes()) }:</span>
            <span className="seconds">{formatNumber(date.getSeconds()) }</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
