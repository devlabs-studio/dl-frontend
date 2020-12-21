import React from 'react'

import './styles.css'

// Icons
import reactIcon from '../../../../assets/icons/reactjs-icon.svg'
import vueIcon from '../../../../assets/icons/vuejs-icon.svg'
import javascriptIcon from '../../../../assets/icons/javascript-icon.svg'
import dartIcon from '../../../../assets/icons/dart-icon.svg'
import githubIcon from '../../../../assets/icons/github-icon.svg'
import typescriptIcon from '../../../../assets/icons/typescript-icon.svg'
import nodeIcon from '../../../../assets/icons/nodejs-icon.svg'
import codeArrow from '../../../../assets/icons/code_arrowFunction.svg'

var openKeyString = '{'
var closeKeyString = '}'
var openFragmentString = '<'
var closeFragmentString = '>'

const Section3 = () => {
  return (
    <div id="section-3">
      <div className="section-3-container">
        <div className="section-3-header">
          <h2>Buscando sempre o melhor.</h2>
          <p>O time está sempre em busca das melhores implementações para cada situação específica.</p>
        </div>

        <div className="section-3-main">
          <div className="develop-demo_windows">
            <div className="develop-demo_windows">
            <div className="develop-demo_editor">
              <div className="jsx-window_window">
                <div className="window-header">
                  <div className="window_trafic">
                    <span className="window-close"></span>
                    <span className="window-minimize"></span>
                    <span className="window-fullScreen"></span>
                  </div>
                  <div className="window_title">
                    <p>index.tsx -- project</p>
                  </div>
                </div>

                <div className="window-main">
                  <div className="window_numbers-column">
                    <div className="editor_lines-background">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                      <div>15</div>
                      <div>16</div>
                    </div>
                  </div>
                  <div className="window_main-content">
                    <div>
                      <span className="code--magenta-color">import</span>
                      <span> </span>
                      <span className="code--white-color">React</span>
                      <span> </span>
                      <span className="code--magenta-color">from</span>
                      <span> </span>
                      <span className="code--purple-color">'react'</span>
                      <span className="code--white-color">;</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--magenta-color">const</span>
                      <span> </span>
                      <span className="code--aqua-color">Page</span>
                      <span className="code--magenta-color">:</span>
                      <span> </span>
                      <span className="code--purple-color">React</span>
                      <span className="code--magenta-color">.</span>
                      <span className="code--purple-color">FC</span>
                      <span> </span>
                      <span className="code--white-color">()</span>
                      <span> </span>
                      <img src={codeArrow} />
                      <span> </span>
                      <span className="code--white-color">{openKeyString}</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">    return</span>
                      <span className="code--white-color"> (</span>
                    </div>
                    <div>
                      <span className="code--white-color">      {openFragmentString}</span>
                      <span className="code--magenta-color">div</span>
                      <span> </span>
                      <span className="code--aqua-color">id</span>
                      <span className="code--white-color">=</span>
                      <span className="code--white-color">"</span>
                      <span className="code--white-color">page</span>
                      <span className="code--white-color">"</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--white-color">        {openFragmentString}</span>
                      <span className="code--magenta-color">div</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <div>
                      <span className="code--white-color">          {openFragmentString}</span>
                      <span className="code--magenta-color">strong</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                      <span className="code--white-color">Bem Vindo</span>
                      <span className="code--white-color">{openFragmentString}/</span>
                      <span className="code--magenta-color">strong</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <div className="typewriter_effect-animation">
                      <span className="code--white-color">          {openFragmentString}</span>
                      <span className="code--magenta-color">strong</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                      <span className="code--white-color">DevLabs</span>
                      <span className="code--white-color">{openFragmentString}/</span>
                      <span className="code--magenta-color">strong</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <div>
                      <span className="code--white-color">        {openFragmentString}/</span>
                      <span className="code--magenta-color">div</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--white-color">      {openFragmentString}</span>
                      <span className="code--magenta-color">div</span>
                      <span className="code--white-color">{closeFragmentString}</span>
                    </div>
                    <div>
                      <span className="code--white-color">    );</span>
                    </div>
                    <div>
                      <span className="code--white-color">{closeKeyString}</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--magenta-color">export</span>
                      <span> </span>
                      <span className="code--magenta-color">default</span>
                      <span> </span>
                      <span className="code--white-color">Page;</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* <div className="develop-demo_editor">
              <div className="jsx-window_window code-window_editor__negative-margin">
                <div className="window-header">
                  <div className="window_trafic">
                    <span className="window-close"></span>
                    <span className="window-minimize"></span>
                    <span className="window-fullScreen"></span>
                  </div>
                  <div className="window_title">
                    <p>server.ts -- api</p>
                  </div>
                </div>

                <div className="window-main">
                  <div className="window_numbers-column">
                    <div className="editor_lines-background">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                    </div>
                  </div>
                  <div className="window_main-content">
                    <div>
                      <span className="code--magenta-color">async</span>
                      <span> </span>
                      <span className="code--magenta-color">function</span>
                      <span> </span>
                      <span className="code--purple-color">bootstrap</span>
                      <span className="code--magenta-color">()</span>
                      <span> </span>
                      <span className="code--magenta-color">{openKeyString}</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">  const</span>
                      <span> </span>
                      <span className="code--white-color">schema</span>
                      <span> </span>
                      <span className="code--magenta-color">=</span>
                      <span> </span>
                      <span className="code--magenta-color">await</span>
                      <span> </span>
                      <span className="code--purple-color">buildSchema</span>
                      <span className="code--magenta-color">({openKeyString}</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">      resolvers:</span>
                      <span> </span>
                      <span className="code--magenta-color">[</span>
                      <span className="code--white-color">ResolverOne</span>
                      <span className="code--magenta-color">,</span>
                      <span className="code--white-color"> ResolverTwo</span>
                      <span className="code--magenta-color">]</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">  {closeKeyString})</span>
                    </div>
                    <span> </span>
                    <div>
                    <span className="code--magenta-color">  const</span>
                      <span> </span>
                      <span className="code--white-color">schema</span>
                      <span> </span>
                      <span className="code--magenta-color">=</span>
                      <span> </span>
                      <span className="code--magenta-color">new</span>
                      <span> </span>
                      <span className="code--aqua-color">ApolloServer</span>
                      <span className="code--white-color">({openKeyString}schema{closeKeyString})</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--white-color">  server</span>
                      <span className="code--magenta-color">.</span>
                      <span className="code--purple-color">listen</span>
                      <span className="code--magenta-color">({openKeyString}</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">    port:</span>
                      <span className="code--aqua-color"> 4100</span>
                    </div>
                    <div>
                      <span className="code--magenta-color">  {closeKeyString},</span>
                      <span className="code--white-color"> ()</span>
                      <span> </span>
                      <img src={codeArrow} />
                      <span> </span>
                      <span className="code--magenta-color">console.</span>
                      <span className="code--purple-color">log</span>
                      <span className="code--magenta-color">(</span>
                      <span className="code--aqua-color">"Running"</span>
                      <span className="code--magenta-color">))</span>
                    </div>
                    <div>
                      <span className="code--white-color">{closeKeyString}</span>
                    </div>
                    <span> </span>
                    <div>
                      <span className="code--purple-color">bootstrap</span>
                      <span className="code--magenta-color">()</span>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="section-3-footer">
          <h4>TRABALHAMOS COM DIVERSAS TECNOLOGIAS, DENTRE ELAS:</h4>
          <div className="section3-techs-icons">
            <img src={reactIcon} />
            <img src={vueIcon} />
            <img src={javascriptIcon} />
            <img src={dartIcon} />
            <img src={githubIcon} />
            <img src={typescriptIcon} />
            <img src={nodeIcon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3