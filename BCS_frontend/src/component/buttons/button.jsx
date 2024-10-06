import React from 'react'
export const Button = ({ title, className, ...props }) => {
  return (
    <button 
      className={`bg-accent text-white py-2 px-4 rounded hover:bg-primary-dark ${className}`}
      {...props}
    >
      {title}
    </button>
  )
}