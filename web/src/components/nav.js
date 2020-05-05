import React from 'react'
import {Link} from 'gatsby'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"

import Icon from './icon'
import styles from './nav.module.css'
import TwitterIcon from './icon/twitter'
import DribbbleIcon from './icon/dribbble'

function Nav ({onHideNav, onShowNav, showNav, siteTitle}) {

  return (
    <>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
      <nav className={cn(styles.nav, showNav && styles.showNav, "p-4 sticky top-0 flex items-center z-10")}>
        <div className="w-2/12">
          <TransitionLink
            className="relative logo px-4 py-3 bg-gray-900 rounded-lg inline-block" to='/'
            to='/'
            exit={{
              length: .6,
            }}
            entry={{
              delay: .6,
              length: .6
            }}
          >
            <span className="relative tracking-tight font-bold">M</span>
          </TransitionLink>
        </div>
        <ul className="flex flex-grow items-center px-4">
          <li>
            <TransitionLink
                className="px-4 py-3 bg-gray-900 rounded-lg font-semibold"
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
              className="px-4 py-3 bg-gray-900 rounded-lg ml-1 font-semibold"
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
          <TransitionLink
              className="px-4 py-3 bg-gray-900 rounded ml-1 font-semibold"
              to='/contact/'
              exit={{
                length: .6
              }}
              entry={{
                delay: .6,
                length: .6
              }}
            >
              <span className="relative">Contact</span>
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
