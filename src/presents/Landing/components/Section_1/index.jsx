import React from 'react'

import ArrowRight from '../../../../assets/icons/arrow_right.svg'
import Montain from '../../../../assets/Montain.svg'

import './styles.css'

const Section1 = () => {
  return (
    <div id="section-1">
      <div className="section-1-main">
        <div className="section-1-main-text">
          <h1 className="section-1-title">
            <span>Reinventando a relação de desenvolvedores com a tecnologia.</span>
          </h1>
          <h4 className="section-1-subtitle">
            <span>Fazer parte desse time</span>
            <img src={ArrowRight} />
          </h4>
        </div>

        <div className="section-1-image">
          <img src={Montain} />
        </div>
      </div>

      <div className="section-1-footer">
        <p>Somos um grupo de programadores prontos para desenvolver os projetos mais desafiadores para otimizar a convivência das pessoas com a tecnologia.</p>
      </div>
    </div>
  )
}

export default Section1