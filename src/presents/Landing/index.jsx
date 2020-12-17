import React from 'react'

import './styles.css'

import Section1 from './components/Section_1/index'

const Landing = () => {
  return (
    <div id="landing-page">
      <div className="landing-content">
        <Section1 />
      </div>
    </div>
  )
}

export default Landing