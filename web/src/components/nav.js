import React from 'react'
import {Link} from 'gatsby'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"

import Icon from './icon'
import styles from './nav.module.css'

function Nav ({onHideNav, onShowNav, showNav, siteTitle}) {

  return (
    <>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
      <nav className={cn(styles.nav, showNav && styles.showNav, "wrapper w-3/12 sticky top-0 border-r border-green-500")}>
        <div className="relative mb-12 py-2 mt-16 pt-4">
          <Link className="py-1 logo block" to='/'>
            <span className="relative px-12 bg-black text-6xl tracking-tight font-bold">M</span>
          </Link>
        </div>
        <ul className="text-2xl">
          <li>
            <TransitionLink
                className="py-1 px-12 bg-black highlight"
                to='/'
                exit={{
                  length: .6,
                }}
                entry={{
                  delay: .6,
                  length: .6
                }}
              >
                <span className="relative">Work</span>
              </TransitionLink>
          </li>
          <li>
            <TransitionLink
              className="py-1 px-12 bg-black highlight"
              to='/about/'
              exit={{
                length: .6
              }}
              entry={{
                delay: .6,
                length: .6
              }}
            >
              <span className="relative">About</span>
            </TransitionLink>
          </li>
          <li>
            <Link className="py-1 px-12 bg-black highlight" to='/contact/'>
              <span className="relative">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
