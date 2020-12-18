import React from 'react'
import Iframe from 'react-iframe'

import './styles.css'

const Section5 = () => {
    return(
        <div id="section5">
            <div className="section5-content">
                <div className="video-about">
                    <Iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/bGsZc7NoO5o"
                    allowfullscreen frameBorder="0" />
                </div>
                <div className="text-about">
                    <div className="title-main">
                        <h2>Por que contribuir <br/> com a gente?</h2>
                    </div>
                    <div className="description-about">
                        <p>A DevLabs é uma iniciativa com o objetivo de aproximar devs das tecnologias utilizadas pela comunidade 
                        dando oportunidade para experimentar novas experiências para avançar, tanto com projetos, quanto na carreira.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5