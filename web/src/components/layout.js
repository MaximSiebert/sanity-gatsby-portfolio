import React from 'react'

import '../styles/layout.css'
import '../styles/tailwind.css'
import Container from './container'
import Nav from './nav'

function Layout ({children, onHideNav, onShowNav, showNav, siteTitle}) {

  function getPageTitle(url) {
    switch(url) {
      case '/':
        return 'Work';
      case '/about/':
        return 'About';
      default:
        return '';
    }
  }

  return (
    <Container>
      <Nav siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div className="w-10/12 ml-auto">
        <div className="bg-black z-10 border-b border-green-500 sticky w-full bg-black top-0 px-12 py-2 flex items-center border-strike">
          <p className="py-1 px-2 text-center bg-black relative inline-block">
            <span className="relative">
            </span>
          </p>
        </div>
        <div className="p-12">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default Layout
