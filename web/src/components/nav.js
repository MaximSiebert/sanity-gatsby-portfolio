import React from 'react'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"

import TwitterIcon from './icon/twitter'
import DribbbleIcon from './icon/dribbble'
import EmailIcon from './icon/email'

import Icon from './icon'
import styles from './nav.module.css'

function Nav ({onHideNav, onShowNav, showNav, siteTitle, role}) {

  const length = 1;
  const delay = .6;

  return (
    <>
      <div className="lg:hidden flex py-2 fixed w-full top-0 left-0 px-4 z-30 bg-black">
        <button className="ml-auto text-3xl focus:outline-none" onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>
      </div>
      <nav className={cn(styles.nav, showNav && styles.showNav, "lg:w-3/12 w-8/12 lg:sticky fixed bg-black top-0 lg:py-20 py-4 left-0 lg:pr-12 lg:pl-0 px-4 border-r border-gray-800 h-screen z-30")}>
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
            <div className="ml-3 pb-1 block text-base font-bold text-white">
              {siteTitle}
              <span className="block text-xs font-normal opacity-75">{role}</span>
            </div>
          </TransitionLink>
          <ul>
            <li>
              <TransitionLink
                  className="nav-item text-white block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-medium"
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
                className="nav-item text-white block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-medium"
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
                className="nav-item text-white block px-4 py-3 rounded-lg hover:bg-gray-800 active:bg-gray-900 mb-1 font-medium"
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
          <div className="mt-auto text-xs pl-1 text-white flex items-center">
            <a href="" className="p-3 hover:bg-gray-800 active:bg-gray-900 rounded-lg">
              <TwitterIcon classes="w-4 h-auto" />
            </a>
            <a href="" className="ml-1 p-3 hover:bg-gray-800 active:bg-gray-900 rounded-lg">
              <DribbbleIcon classes="w-4 h-auto" />
            </a>
            <a href="" className="ml-1 p-3 hover:bg-gray-800 active:bg-gray-900 rounded-lg">
              <EmailIcon classes="w-4 h-auto" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
