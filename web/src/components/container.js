import React from 'react'

const Container = ({children}) => {
  return (
    <div className="m-4 rounded-lg wrapper border border-green-500 overflow-hidden relative">
      <div className="overflow-y-scroll wrapper">
        {children}
      </div>
    </div>
  );
}

export default Container
