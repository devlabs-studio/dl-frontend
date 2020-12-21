import React from 'react'
import './styles.css'

import DevLabsIcon from '../../../../assets/dl-logo.svg'
import GitIcon from '../../../../assets/social/github.svg'
import TwitterIcon from '../../../../assets/social/twitter.svg'
import InstagramIcon from '../../../../assets/social/instagram.svg'
import YoutubeIcon from '../../../../assets/social/youtube.svg'
import BackIcon from '../../../../assets/social/back.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div id="container">

                <div className="footer-column1">
                    <div className="footer-content1">
                        <h3>Sobre Nós</h3>
                        <h3>Carreiras</h3>
                        <h3>Perguntas Frequentes</h3>
                        <h3>Contato</h3>
                        <h3>Comunidades</h3>
                    </div>
                    <div className="footer-content2">
                        <h3>Blog</h3>
                        <h3>Newsletter</h3>
                        <h3>Política de segurança</h3>
                        <h3>Api's</h3>
                        <h3>Comunidades</h3>
                    </div>
                </div>
                <div className="footer-column2">
                    <div className="footer-content">
                        <h3>suporte@devlabs.com.br</h3>
                        <h3>Suporte 24H</h3>
                    </div>
                </div>
                <div className="footer-column3">
                    <div className="logoImage">
                        <img src={DevLabsIcon} alt="DevLabs Icon"/>
                    </div>
                    <div className="social">
                        <div className="icons-social">
                            <a href="#">
                                <img src={GitIcon} alt=""/>
                            </a>
                            <a href="#">
                                <img src={TwitterIcon} alt=""/>
                            </a>
                            <a href="#">
                                <img src={InstagramIcon} alt=""/>
                            </a>
                            <a href="#">
                                <img src={YoutubeIcon} alt=""/>
                            </a>
                        </div>
                        <div className="back">
                            <a href="#">
                                <img src={BackIcon} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer