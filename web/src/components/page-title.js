import React from 'react'

function PageTitle({ title }) {
  return (
    <div className="bg-black z-10 border-b border-green-500 sticky w-full bg-black top-0 px-12 py-2 flex items-center border-strike">
      <p className="py-1 px-2 text-center bg-black relative inline-block">
        <span className="relative">
          {title}
        </span>
      </p>
    </div>
  )
}

export default PageTitle