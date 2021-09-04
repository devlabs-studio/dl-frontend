import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Import all pages
import Landing from './presents/Landing/index'
import About from './presents/About/index'
import Technology from './presents/Technology/index';
import Projects from './presents/Projects/index';

import Header from './components/header/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route component={Landing} exact path="/" />
      <Route component={About} exact path="/about" />
      <Route component={Technology} exact path="/technology" />
      <Route component={Projects} exact path="/projects" />
    </BrowserRouter>
  )
}

export default Routes;
