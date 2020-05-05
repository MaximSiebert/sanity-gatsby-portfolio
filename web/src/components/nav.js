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
      <nav className={cn(styles.nav, showNav && styles.showNav, "wrapper w-3/12 sticky top-0 flex flex-col border-r border-green-500")}>
        <TransitionLink
          className="relative logo pb-4 pt-16 pt-4 highlight" to='/'
          to='/'
          exit={{
            length: .6,
          }}
          entry={{
            delay: .6,
            length: .6
          }}
        >
          <span className="relative px-6 text-6xl tracking-tight font-bold">M</span>
        </TransitionLink>
        <ul className="border-t border-b border-green-100">
          <li>
            <TransitionLink
                className="py-4 px-6 highlight"
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
              className="py-4 px-6 highlight"
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
              className="py-4 px-6 highlight"
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
        <div class="flex mt-auto border-t border-green-100">
          <a className="flex-grow border border-r-0 border-t-0 border-green-100 px-6 py-4 highlight" href="">
            <span className="relative">
              Get in touch
            </span>
          </a>
          <a className="text-sm uppercase tracking-wider border border-r-0 border-t-0 border-green-100 p-4 flex items-center highlight" href="">
            <span className="relative">
              <TwitterIcon classes="w-4 h-auto" />
            </span>
          </a>
          <a className="text-sm uppercase tracking-wider border border-r-0 border-t-0 border-green-100 p-4 flex items-center highlight" href="">
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
