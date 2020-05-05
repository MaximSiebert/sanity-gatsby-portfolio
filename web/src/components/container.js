import React from 'react'

const Container = ({children}) => {
  return (
    <div className="max-w-6xl mx-auto flex items-start p-4">
      {children}
    </div>
  );
}

export default Container
