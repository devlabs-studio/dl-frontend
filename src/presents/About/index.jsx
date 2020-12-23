import React from 'react'
import { Link } from 'react-router-dom'
import CardAbout from  '../../components/CardAbout';


import arrowDown from '../../assets/icons/arrowDown.svg'

import './styles.css'

const About = () => {

  const image = 'https://avatars0.githubusercontent.com/u/52288792?s=400&u=a150c46bbd7f8cd07176bf8853a234c5075d0bc8&v=4'; 
  const githubProfile = 'pedroarm';
  const name = 'Pedro Augusto';

  return (
    <div id="page-about">
      <div id="page-about-content" className="container">
          <div className="about__header-content"
          
          >
            <h1>A contínua jornada da DevLabs.</h1>
            <span>
              <img src={arrowDown} alt="arrow-down" />
            </span>
          </div>
          <p>A jornada da DevLabs começa em dezembro de 2020, em uma iniciativa de jovens desenvolvedores que estão continuamente em busca de conhecimento na área da tecnologia. Desde então a DevLabs vem evoluindo com a adoção de novos métodos de desenvolvimento e novas ferramentas que atendem os nossos propósitos.</p>
          <p>Procuramos adotar uma filosofia de cultura livre, onde todos podem participar, aprender, modificar e redistribuir os projetos públicos que produzimos. Além disso nós temos uma atenção para a portabilidade, garantindo que aquilo que produzimos seja compatível com o maior número de ambientes possível. É essencial que todos possam fazer o uso de nossos projetos com uma boa experiência final, sem restrições.</p>
          <p>Aqui na DevLabs até os programadores que estão começando têm acesso a conhecimento compartilhado por desenvolvedores mais experientes, permitindo o aprendizado junto ao desenvolvimento pessoal. </p>
      </div>
      <div class="developer-text">
        <h1>NOSSOS DESENVOLVEDORES</h1>

      </div>
      <div class="card-component">
          <div class="card-unique">
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
            <CardAbout {...{name,githubProfile,image}}/>
          </div>
      </div>
      
    </div>
  )
}


export default About