import React from 'react'

import './styles.css'

import Section1 from './components/Section_1/index'
import Section2 from './components/Section_2/index'
import Section5 from './components/Section_5/index'

const Landing = () => {
  return (
    <div id="landing-page">
      <div className="landing-content">
        <Section1 />
        
        <Section2 />

        <Section5 />
      </div>
    </div>
  )
}

export default Landing