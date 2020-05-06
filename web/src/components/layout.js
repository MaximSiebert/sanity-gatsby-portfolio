import React from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { motion } from "framer-motion"

import '../styles/layout.css'
import '../styles/tailwind.css'
import Container from './container'
import Nav from './nav'

function Layout ({children, onHideNav, onShowNav, showNav, siteTitle}) {

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
      <Nav siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <TransitionState>
        {({ transitionStatus, exit, enter, mount }) => {
          console.log("current page's transition status is", transitionStatus)
          console.log("exit object is", exit)
          console.log("enter object is", enter)
          return (
                <motion.div
                  className="w-9/12 pl-12 pt-16 pb-16"
                  initial="false"
                  animate={mount ? "visible" : "hidden"}
                  transition={{ duration: .4, ease: [.19, 1, 0.22, 1] }}
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
