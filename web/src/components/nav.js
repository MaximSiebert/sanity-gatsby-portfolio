import React from 'react'
import {cn} from '../lib/helpers'
import TransitionLink from "gatsby-plugin-transition-link"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {Howl, Howler} from 'howler';
import Corners from './corners'

import TwitterIcon from './icon/twitter'
import DribbbleIcon from './icon/dribbble'
import EmailIcon from './icon/email'
import Icon from './icon'
import styles from './nav.module.css'
import tickAudio from '../sounds/tick.mp3'
import clickAudio from '../sounds/click.mp3'
import startAudio from '../sounds/start.mp3'

function Nav ({onHideNav, onShowNav, showNav, siteTitle, role, portrait}) {

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
      <div className="lg:hidden flex py-2 fixed w-full top-0 left-0 px-4 z-30 bg-black">
        <button className="ml-auto text-3xl focus:outline-none" onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>
      </div>
      <nav className={cn(styles.nav, showNav && styles.showNav, "lg:w-3/12 w-8/12 lg:sticky fixed bg-black top-0 lg:py-20 py-4 left-0 lg:pr-12 lg:pl-0 px-4 h-screen z-30")}>
        <div className="flex flex-col h-full">
          <TransitionLink
            onMouseEnter={playTick}
            onMouseDown={playClick}
            onClick={playStart}
            className="inner-border group clickable-item id-badge hover:box-shadow-light leading-tight flex items-center logo border border-gray-700 hover:border-green-500 bg-gray-800 active:bg-gray-900 font-medium block mb-2"
            to='/'
            exit={{
              length: length,
            }}
            entry={{
              delay: delay,
              length: length
            }}
          >
            <Corners classes="out" />
            <div class="relative">
              {portrait &&
                <>
                  <img
                    className="block w-16 h-auto portrait"
                    src={imageUrlFor(buildImageObj(portrait))
                      .width(128)
                      .height(128)
                      .fit('crop')
                      .url()}
                    alt={portrait.alt}
                  />
                  <img
                    className="block w-16 h-auto portrait-hover absolute inset-0"
                    src={imageUrlFor(buildImageObj(portrait))
                      .width(128)
                      .height(128)
                      .fit('crop')
                      .url()}
                    alt={portrait.alt}
                  />
                </>
              }
            </div>
            <div className="ml-4 pb-1 block text-base font-bold text-white">
              {siteTitle}
              <span className="font-mono block text-xs font-normal text-gray-500">{role}</span>
            </div>
          </TransitionLink>
          <ul className="border-t border-b border-gray-700 relative">
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
          <div className="mt-auto mr-auto text-xs flex items-center relative group">
            <Corners />
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href=""
              className="clickable-item hover:box-shadow-light p-3 border mr-1 border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
            >
              <TwitterIcon classes="w-4 h-auto" />
            </a>
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href=""
              className="clickable-item hover:box-shadow-light p-3 border mr-1 border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
            >
              <DribbbleIcon classes="w-4 h-auto" />
            </a>
            <a
              onMouseEnter={playTick}
              onMouseDown={playClick}
              href=""
              className="clickable-item hover:box-shadow-light p-3 border border-gray-700 hover:border-green-500 text-gray-500 hover:text-green-500 hover:bg-gray-800 active:bg-gray-900"
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
