import React from 'react'

import MyCarousel from './components/carousel/index'

import './styles.css'

const Section4 = () => {
    return(
        <div id="section4">
            <div className="section4-content">
              <h1>A seguir, o que a gente ta falando da gente.</h1>

              <div className="section4-image">
                  <MyCarousel />
                
              </div>
            </div>
        </div>

    )
}

export default Section4


