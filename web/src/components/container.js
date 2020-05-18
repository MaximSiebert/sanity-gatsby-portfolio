import React from 'react'

const Container = ({children}) => {
  return (
    <div className="lg:max-w-6xl mx-auto flex items-start px-4">
      {children}
    </div>
  );
}

export default Container
