import React from 'react'
import TransitionLink from "gatsby-plugin-transition-link"

function PageTitle({ title }) {
  return (
    <div className="bg-black z-10 sticky w-full bg-black top-0 py-6 flex items-center border-strike">
      <div className="w-1/2">
        <p className="py-1 px-2 text-center bg-black relative inline-block">
          <span className="relative">
            {title}
          </span>
        </p>
      </div>
      <ul className="flex">
        <li>
          <TransitionLink
              className="py-3 px-2 bg-black relative"
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
            className="py-3 px-2 bg-black relative ml-8"
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
            className="py-3 px-2 bg-black relative ml-8"
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
    </div>
  )
}

export default PageTitle