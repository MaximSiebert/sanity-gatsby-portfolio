import React from 'react'

const Container = ({children}) => {
  return (
    <div className="m-4 wrapper border border-green-500 overflow-hidden relative">
      <div className="flex wrapper items-start overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

export default Container
