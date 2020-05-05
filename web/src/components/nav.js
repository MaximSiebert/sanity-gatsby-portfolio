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
      <nav className={cn(styles.nav, showNav && styles.showNav, "w-4/12 sticky top-0")}>
        <TransitionLink
          className="logo px-4 py-3 rounded-lg hover:bg-gray-900 mb-1 block"
          to='/'
          exit={{
            length: .6,
          }}
          entry={{
            delay: .6,
            length: .6
          }}
        >
          <span className="relative">Maxim Siebert</span>
        </TransitionLink>
        <ul>
          <li>
            <TransitionLink
                className="px-4 py-3 rounded-lg hover:bg-gray-900 mb-1"
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
              className="px-4 py-3 rounded-lg hover:bg-gray-900 mb-1"
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
              className="px-4 py-3 rounded-lg hover:bg-gray-900 mb-1"
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
        <div class="flex">
          <a className="px-4 py-3 rounded-lg hover:bg-gray-900" href="">
            <span className="relative">
              <TwitterIcon classes="w-4 h-auto" />
            </span>
          </a>
          <a className="px-4 py-3 rounded-lg hover:bg-gray-900 ml-2" href="">
            <span className="relative">
              <DribbbleIcon classes="w-4 h-auto" />
            </span>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav
