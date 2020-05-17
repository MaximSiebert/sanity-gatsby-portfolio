import React from 'react';

function Corners({classes}) {
  return (
    <React.Fragment>
      <div className={classes + " corner z-10 absolute w-2 h-2 left-0 top-0 border-t border-l border-gray-500 group-hover:border-green-500"} />
      <div className={classes + " corner z-10 absolute w-2 h-2 left-0 bottom-0 border-b border-l border-gray-500 group-hover:border-green-500"} />
      <div className={classes + " corner z-10 absolute w-2 h-2 right-0 top-0 border-t border-r border-gray-500 group-hover:border-green-500"} />
      <div className={classes + " corner z-10 absolute w-2 h-2 right-0 bottom-0 border-b border-r border-gray-500 group-hover:border-green-500"} />
    </React.Fragment>
  );
}

export default Corners;