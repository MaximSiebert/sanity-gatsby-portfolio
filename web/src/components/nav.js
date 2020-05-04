import React from 'react'
import {Link} from 'gatsby'
import {cn} from '../lib/helpers'

import Icon from './icon'
import styles from './nav.module.css'

const Nav = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </button>
    <nav className={cn(styles.nav, showNav && styles.showNav, "wrapper w-2/12 sticky top-0 border-r border-green-500")}>
      <div className="border-strike relative border-b border-green-500 mb-12 py-2">
        <Link className="py-1 logo block" to='/'>
          <span className="relative px-2 bg-black">~/{siteTitle}</span>
        </Link>
      </div>
      <ul className="">
        <li>
          <Link className="py-1 px-2 bg-black highlight" to='/'>
            <span className="relative">Work</span>
          </Link>
        </li>
        <li>
          <Link className="py-1 px-2 bg-black highlight" to='/about/'>
            <span className="relative">About</span>
          </Link>
        </li>
        <li>
          <Link className="py-1 px-2 bg-black highlight" to='/contact/'>
            <span className="relative">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Nav
