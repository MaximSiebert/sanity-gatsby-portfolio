import React from 'react'

function SectionHeader(props) {
  return (
    <>
      <div className="border-strike relative font-mono text-xs py-6 mr-1 bg-black relative sticky top-0 z-20">
        <span className="relative bg-black px-4">{props.title}</span>
      </div>
    </>
  )
}

export default SectionHeader
