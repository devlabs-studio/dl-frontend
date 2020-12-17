import React from 'react'

import DevLabsLogo from '../../assets/dl-logo.svg'
import './styles.css'

const Header = () => {
  return (
    <div id="header">
      <div id="container">
        <div className="logo-img">
          <img src={DevLabsLogo} alt="logo image"/>
        </div>

        <div className="menu">
          <ul>
            <li><a className="menu-select" href="">Inicio</a></li>
            <li><a href="">Tecnologias</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Sobre</a></li>
          </ul>
        </div>

        <div className="donate">
          <a href="">Contribuir</a>
        </div>
      </div>
    </div>
  )
}

export default Header