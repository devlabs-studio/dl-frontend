import React, { Fragment } from 'react'

import './styles.css'

import Section1 from './components/Section_1/index'
import Section2 from './components/Section_2/index'
import Section5 from './components/Section_5/index'
import Section3 from './components/Section_3/index'
import Footer from './components/footer/index'

const Landing = () => {
  return (
    <Fragment>
      <div id="landing-page">
        <div className="landing-content">
          <Section1 />
          
          <Section2 />

          <Section3 />

          <Section5 />
        </div>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default Landing