import React from 'react'
import { Link } from 'react-router-dom'

import DevLabsLogo from '../../assets/dl-logo.svg'
import './styles.css'

const Header = () => {
  return (
    <div id="header">
      <div className="header-background">
        <div id="container">
          <div className="logo-img">
            <img src={DevLabsLogo} alt="logo image"/>
          </div>

          <div className="menu">
            <ul>
              <li><Link to="/" className="menu-select">Inicio</Link></li>
              <li><Link to="/">Tecnologias</Link></li>
              <li><Link to="/">Projetos</Link></li>
             <li><Link to="/about">Sobre</Link></li> 
            </ul>
          </div>

          <div className="contribute">
            <Link to="">Contribuir</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header