import React from 'react'

function SectionHeader(props) {
  return (
    <>
      <div className="border-strike relative font-medium py-6 mr-1 relative top-0 z-10">
        <span className="relative bg-black px-4 font-mono uppercase tracking-wider text-xs">{props.title}</span>
      </div>
    </>
  )
}

export default SectionHeader
