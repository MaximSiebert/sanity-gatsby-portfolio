import React from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { motion } from "framer-motion"

import '../styles/layout.css'
import '../styles/tailwind.css'
import Container from './container'
import Nav from './nav'

function Layout ({children, onHideNav, onShowNav, showNav, siteTitle, role, portrait}) {

  const variants = {
    hidden: {
      y: 10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    },
  }

  return (
    <Container>
      <Nav role={role} siteTitle={siteTitle} portrait={portrait} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <TransitionState>
        {({ transitionStatus, exit, enter, mount }) => {
          console.log("current page's transition status is", transitionStatus)
          console.log("exit object is", exit)
          console.log("enter object is", enter)
          return (
                <motion.div
                  className="lg:w-9/12 lg:pl-12 lg:py-20 py-12"
                  initial="hidden"
                  animate={mount ? "visible" : "hidden"}
                  transition={{ duration: 1, ease: [.19, 1, 0.22, 1] }}
                  variants={variants}
                >
                  {children}
                </motion.div>
          )
        }}
      </TransitionState>
    </Container>
  )
}

export default Layout
