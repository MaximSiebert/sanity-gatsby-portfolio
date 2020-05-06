import React from 'react'
import {Link} from 'gatsby'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"

import Icon from './icon'
import styles from './nav.module.css'
import TwitterIcon from './icon/twitter'
import DribbbleIcon from './icon/dribbble'

function Nav ({onHideNav, onShowNav, showNav, siteTitle}) {
  const length = .4;
  const delay = .4;

  return (
    <>
      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
      <nav className={cn(styles.nav, showNav && styles.showNav, "w-3/12 sticky top-0 pt-16 pr-12 border-r border-gray-800 h-screen")}>
        <div className="pr-1">
          <TransitionLink
            className="pr-4 leading-tight flex items-center logo rounded-lg hover:bg-gray-900 mb-8 font-medium block"
            to='/'
            exit={{
              length: length,
            }}
            entry={{
              delay: delay,
              length: length
            }}
          >
            <img className="block w-12 h-auto rounded-lg" src="https://pbs.twimg.com/profile_images/883864805039386624/dO6Cjn9g_400x400.jpg" alt=""/>
            <div className="ml-3 py-2 block text-base text-white">
              Maxim Siebert
              <span className="block text-xs font-normal font-mono opacity-75">Designer & Developer</span>
            </div>
          </TransitionLink>
          <ul>
            <li>
              <TransitionLink
                  className="block px-4 py-3 rounded-lg hover:bg-gray-900 mb-1 font-mono text-xs"
                  to='/'
                  exit={{
                    length: length,
                  }}
                  entry={{
                    delay: delay,
                    length: length
                  }}
                >
                  <span className="relative">01 Work & Services</span>
                </TransitionLink>
            </li>
            <li>
              <TransitionLink
                className="block px-4 py-3 rounded-lg hover:bg-gray-900 mb-1 font-mono text-xs"
                to='/about/'
                exit={{
                  length: length
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
              >
                <span className="relative">02 About</span>
              </TransitionLink>
            </li>
            <li>
            <TransitionLink
                className="block px-4 py-3 rounded-lg hover:bg-gray-900 mb-1 font-mono text-xs"
                to='/contact/'
                exit={{
                  length: length
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
              >
                <span className="relative">03 Contact</span>
              </TransitionLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
