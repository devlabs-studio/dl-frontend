import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import DevLabsIcon from '../../../../assets/dl-logo.svg'
import GitIcon from '../../../../assets/social/github.svg'
import TwitterIcon from '../../../../assets/social/twitter.svg'
import InstagramIcon from '../../../../assets/social/instagram.svg'
import YoutubeIcon from '../../../../assets/social/youtube.svg'
import BackIcon from '../../../../assets/icons/cheveron_up.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div id="container">

                <div className="footer-column1">
                    <div className="footer-content1">
                        <Link to="/">Sobre Nós</Link>
                        <Link to="/">Carreiras</Link>
                        <Link to="/">Perguntas Frequentes</Link>
                        <Link to="/">Contato</Link>
                        <Link to="/">Comunidades</Link>
                    </div>
                    <div className="footer-content2">
                        <Link to="/">Blog</Link>
                        <Link to="/">Newsletter</Link>
                        <Link to="/">Política de segurança</Link>
                        <Link to="/">Api's</Link>
                        <Link to="/">Comunidades</Link>
                    </div>
                </div>

                <div className="footer-column2">
                    <div className="footer-content">
                        <Link to="/">suporte@devlabs.com.br</Link>
                        <Link to="/">Suporte 24H</Link>
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