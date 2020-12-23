import React from 'react'
import Iframe from 'react-iframe'

import './styles.css'

const Section5 = () => {
    return(
        <div id="section5">
            <div className="section5-content">
                <div className="video-about">
                    <iframe src="https://www.youtube.com/embed/bGsZc7NoO5o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="text-about">
                    <div className="title-main">
                        <h2>Por que contribuir com a gente?</h2>
                    </div>
                    <div className="description-about">
                        <p>A <b>DevLabs</b> é uma iniciativa com o objetivo de aproximar devs das tecnologias utilizadas pela comunidade 
                        dando oportunidade para experimentar novas experiências para avançar, tanto com projetos, quanto na carreira.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5