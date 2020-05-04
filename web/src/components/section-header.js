import React from 'react'

function SectionHeader(props) {
  return (
    <>
      <div className="mb-6 border-strike relative">
        <div class="relative flex w-full">
          <div className="w-1/2"><p className="bg-black inline-block px-2">{props.firstLabel}</p></div>
          <div className="w-1/4"><p className="bg-black inline-block px-2">{props.secondLabel}</p></div>
          <div className="w-1/4 text-right"><p className="bg-black inline-block px-2">{props.thirdLabel}</p></div>
        </div>
      </div>
    </>
  )
}

export default SectionHeader
