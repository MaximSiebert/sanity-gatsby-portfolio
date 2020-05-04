import React from 'react'

import '../styles/layout.css'
import '../styles/tailwind.css'
import Container from './container'
import Nav from './nav'

function Layout ({children, onHideNav, onShowNav, showNav, siteTitle}) {

  return (
    <Container>
      <Nav siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="w-10/12 ml-auto">
        {children}
      </div>
    </Container>
  )
}

export default Layout
