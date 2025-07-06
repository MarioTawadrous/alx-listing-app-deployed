import React from 'react'
import { ButtonProps } from '../../interfaces'

const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary',
  onClick 
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors"
  const variantClasses = variant === 'primary' 
    ? "bg-rose-500 text-white hover:bg-rose-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300"

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
