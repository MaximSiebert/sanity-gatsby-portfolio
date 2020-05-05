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
      x: "100%",
    },
    visible: {
      x: 0,
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
                  className="flex-grow"
                  initial="false"
                  animate={mount ? "visible" : "hidden"}
                  transition={{ duration: .6, ease: [.19, 1, 0.22, 1] }}
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
