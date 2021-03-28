import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Import all pages
import Landing from './presents/Landing/index'
import About from './presents/About/index'
import Technology from './presents/Technology/index';

import Header from './components/header/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Landing} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Technology} exact path="/technology" />
    </BrowserRouter>
  )
}

export default Routes
