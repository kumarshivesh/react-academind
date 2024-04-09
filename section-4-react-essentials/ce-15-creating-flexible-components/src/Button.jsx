import React from 'react'

export default function Button({ children, mode = 'filled', Icon, ...props }) {
  // Todo: Build this component!
  
  // !!! Important: 
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  
  // Determine the className based on the mode
   let className = 'button';
   if (mode === 'outline') {
     className += ' outline-button';
   } else if (mode === 'text') {
     className += ' text-button';
   } else {
     className += ' filled-button';
   }
   // Add 'icon-button' class if Icon prop is provided
   if (Icon) {
     className += ' icon-button';
   }
 
   // Render the icon if provided
   const iconElement = Icon ? <span className="button-icon"><Icon /></span> : null;
  return(
  <button className={className} {...props}>
    {iconElement}
    <span>{children}</span>
  </button> 
  )
 }
 
