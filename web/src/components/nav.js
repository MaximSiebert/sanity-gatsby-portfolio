import React, {useRef} from 'react'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {Howl, Howler} from 'howler';
import Corners from './corners'
import IdBadge from './id-badge'

import TwitterIcon from './icon/twitter'
import DribbbleIcon from './icon/dribbble'
import EmailIcon from './icon/email'
import Icon from './icon'
import styles from './nav.module.css'
import tickAudio from '../sounds/tick.mp3'
import clickAudio from '../sounds/click.mp3'
import startAudio from '../sounds/start.mp3'
import { motion } from 'framer-motion'

function Nav ({onHideNav, onShowNav, showNav, siteTitle, role, portrait, navRef, enter, exit, mount}) {

  const length = 1;
  const delay = .6;

  var tick = new Howl({
    src: [tickAudio]
  });

  var click = new Howl({
    src: [clickAudio],
    volume: 0.2
  });

  var start = new Howl({
    src: [startAudio],
    volume: 0.15
  });

  function playTick () {
    tick.play()
  }

  function playClick () {
    click.play()
  }

  function playStart () {
    start.play()
  }

  return (
    <>
      <div
        className="px-5 py-2 lg:hidden flex items-center bg-black border-b border-gray-700 fixed w-full top-0 left-0 z-20"
      >
        <IdBadge
          siteTitle={siteTitle}
          role={role}
          portrait={portrait}
          showName={false}
        />
        <button
          onMouseEnter={playTick}
          onMouseDown={playClick}
          onClick={playStart}
          className="ml-auto text-3xl focus:outline-none text-gray-500 hover:text-green-500"
          onClick={showNav ? onHideNav : onShowNav}
        >
          <Icon symbol='hamburger' />
        </button>
      </div>
      <div
        className={cn((showNav && mount) ? "lg:invisible visible lg:opacity-0 opacity-100" : "invisible opacity-0", "overlay fixed inset-0 z-20")}
        onClick={onHideNav}
      />
      <nav
        ref={navRef}
        className={cn(styles.nav, (showNav && mount) && styles.showNav, "lg:w-3/12 w-10/12 max-w-4xl lg:sticky fixed top-0 bottom-0 lg:h-screen lg:py-20 left-0 xl:pr-12 lg:p-0 p-4 bg-black lg:border-r-0 border-r border-gray-700 z-30")}
      >
        <div
          className="flex flex-col h-full"
        >
          <IdBadge
            siteTitle={siteTitle}
            role={role}
            portrait={portrait}
            showName={true}
          />
          <ul
            className="border-t border-b bg-black border-gray-700 relative"
          >
            <li className="border-r border-gray-700 z-10 relative">
              <TransitionLink
                onMouseEnter={playTick}
                onMouseDown={playClick}
                onClick={playStart}
                className="nav-item text-xs uppercase border-l border-gray-700 tracking-wider text-gray-500 hover:text-green-500 block px-4 py-3 hover:bg-gray-800 active:bg-gray-900 font-medium font-mono"
                to='/'
                exit={{
                  length: length,
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
                >
                  <span className="relative">01. Work & Services</span>
                </TransitionLink>
            </li>
            <li className="border-r border-gray-700 z-10 relative">
              <TransitionLink
                onMouseEnter={playTick}
                onMouseDown={playClick}
                onClick={playStart}
                className="nav-item text-xs uppercase border-l border-gray-700 tracking-wider text-gray-500 hover:text-green-500 block px-4 py-3 hover:bg-gray-800 active:bg-gray-900 font-medium font-mono"
                to='/about/'
                exit={{
                  length: length
                }}
                entry={{
                  delay: delay,
                  length: length
                }}
              >
                <span className="relative">02. About</span>
              </TransitionLink>
            </li>
            <li className="border-r border-gray-700 z-10 relative">
            <TransitionLink
              onMouseEnter={playTick}
              onMouseDown={playClick}
              onClick={playStart}
              className="nav-item text-xs uppercase border-l border-gray-700 tracking-wider text-gray-500 hover:text-green-500 block px-4 py-3 hover:bg-gray-800 active:bg-gray-900 font-medium font-mono"
              to='/contact/'
              exit={{
                length: length
              }}
              entry={{
                delay: delay,
                length: length
              }}
              >
                <span className="relative">03. Contact</span>
              </TransitionLink>
            </li>
          </ul>
          <div
            className="mt-auto mr-auto text-xs flex items-center relative group"
          >
            <Corners />
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href="http://instagram.com"
              target="_blank"
              rel="nooppener noreferrer"
              className="clickable-item bg-black hover:box-shadow-light p-3 border mr-1 border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
            >
              <TwitterIcon classes="w-4 h-auto" />
            </a>
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href="http://instagram.com"
              target="_blank"
              rel="nooppener noreferrer"
              className="clickable-item bg-black hover:box-shadow-light p-3 border mr-1 border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
            >
              <DribbbleIcon classes="w-4 h-auto" />
            </a>
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href="http://instagram.com"
              target="_blank"
              rel="nooppener noreferrer"
              className="clickable-item bg-black hover:box-shadow-light p-3 border border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
            >
              <EmailIcon classes="w-4 h-auto" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
