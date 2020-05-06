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
      <nav className={cn(styles.nav, showNav && styles.showNav, "w-3/12 sticky top-0 py-16 pr-12 border-r border-gray-800 h-screen flex")}>
        <div className="pr-1 flex flex-col h-full">
          <TransitionLink
            className="p-1 leading-tight flex items-center logo rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-8 font-medium block"
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
            <div className="ml-3 pb-1 block text-base text-white">
              Maxim Siebert
              <span className="block text-xs font-normal font-mono opacity-75">Designer & Developer</span>
            </div>
          </TransitionLink>
          <ul>
            <li>
              <TransitionLink
                  className="nav-item block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-mono text-xs"
                  to='/'
                  exit={{
                    length: length,
                  }}
                  entry={{
                    delay: delay,
                    length: length
                  }}
                >
                  <span className="relative">Work & Services</span>
                </TransitionLink>
            </li>
            <li>
              <TransitionLink
                className="nav-item block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-mono text-xs"
                to='/about/'
                exit={{
                  length: length
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
              >
                <span className="relative">About</span>
              </TransitionLink>
            </li>
            <li>
            <TransitionLink
                className="nav-item block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-mono text-xs"
                to='/contact/'
                exit={{
                  length: length
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
              >
                <span className="relative">Contact</span>
              </TransitionLink>
            </li>
          </ul>
          <div className="mt-auto text-xs font-mono pl-4 text-white flex items-center">
            <p className="opacity-50">©</p>
            <span className="px-1 opacity-25">•</span>
            <a href="" className="opacity-75 hover:opacity-100">Twitter</a>
            <span className="px-1 opacity-25">•</span>
            <a href="" className="opacity-75 hover:opacity-100">Dribbble</a>
            <span className="px-1 opacity-25">•</span>
            <a href="" className="opacity-75 hover:opacity-100">Email</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
