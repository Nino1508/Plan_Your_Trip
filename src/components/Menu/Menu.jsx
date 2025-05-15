
import { useEffect, useState } from 'react'
import './Menu.css'

function Menu({ toggleCategory }) {
/* ESTO ES PARA LA HORA */
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()),1000);
    return () => clearInterval(timer);
  },[]);
  const formatNumber = (num) => String(num).padStart(2,'0');

  
/* ESTO ES PARA LA HAMBURGUESA */
  
const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="menu">
        {/* BOTON HAMBURGUESA */}
        <button    className={'menu-button' + (isOpen ? ' open' : '')}
        onClick={() => setIsOpen(!isOpen)}>
          <span></span>
        </button>

        {/* CUANDO ESTA ABIERTA LA HAMBURGUESA */}
        {isOpen && (
        <nav className="menu-items">
          <ul>
            <li><button onClick={() => toggleCategory('Alojamiento')}>Alojamiento</button></li>
            <li><button onClick={() => toggleCategory('Gastronomia')}>Gastronomia</button></li>
            <li><button onClick={() => toggleCategory('Tours')}>Tours</button></li>
            <li><button onClick={() => toggleCategory('Transporte')}>Transporte</button></li>
             <li><button onClick={() => toggleCategory('Presupuesto')}>Presupuesto</button></li>
          </ul>
        </nav>
        )}

        {/* PARTE DERECHA DE EL MENU / HORA Y FECHA */}
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

export default Menu