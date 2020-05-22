import React from 'react'
import { TransitionState } from 'gatsby-plugin-transition-link'
import { motion } from "framer-motion"
import {cn} from '../lib/helpers'

import '../styles/layout.css'
import '../styles/tailwind.css'
import Nav from './nav'

function Layout ({children, onHideNav, onShowNav, showNav, siteTitle, role, portrait, navRef}) {

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
    <div className="lg:max-w-6xl mx-auto flex items-start px-4">
      <Nav
        navRef={navRef}
        role={role}
        siteTitle={siteTitle}
        portrait={portrait}
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
      />
      <TransitionState>
        {({ transitionStatus, exit, enter, mount }) => {
          return (
            <>
              <motion.div
                className="lg:w-9/12 lg:pl-12 lg:py-20 pt-24 pb-8"
                onHideNav={onHideNav}
                onShowNav={onShowNav}
                showNav={showNav}
                initial="hidden"
                animate={mount ? "visible" : "hidden"}
                transition={{ duration: 1, ease: [.19, 1, 0.22, 1] }}
                variants={variants}
              >
                {children}
              </motion.div>
            </>
          )
        }}
      </TransitionState>
    </div>
  )
}

export default Layout
