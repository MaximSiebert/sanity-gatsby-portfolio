import React from 'react'

function PageTitle({ title }) {
  return (
    <p className="py-3 pl-4 mb-1">
      <span className="relative">
        {title}
      </span>
    </p>
  )
}

export default PageTitle