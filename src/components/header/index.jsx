import React from 'react'

import DevLabsLogo from '../../assets/dl-logo.svg'

const Header = () => {
  return (
    <div id="header">
      <div className="header-content">
        <img src={DevLabsLogo} />
      </div>
    </div>
  )
}

export default Header