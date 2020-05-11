import React from 'react'

function SectionHeader(props) {
  return (
    <>
      <div className="border-strike relative font-medium py-6 mr-1 bg-black relative lg:sticky top-0 z-20">
        <span className="relative bg-black px-4">{props.title}</span>
      </div>
    </>
  )
}

export default SectionHeader
