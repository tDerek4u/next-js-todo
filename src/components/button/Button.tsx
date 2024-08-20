import { buttonProps } from '@/type/type'
import clsx from 'clsx'
import React from 'react'

 const Button = ({type,text,onClick,actionButton,bgColor, ...props} : buttonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={clsx(actionButton && 'text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 mb-2 py-2.5 me-2 focus:outline-none' , `${bgColor} hover:${bgColor} font-medium rounded-lg text-sm px-5 mb-2 py-2.5 me-2 focus:outline-none`)}>{text}</button>
    </div>
  )
}

export default Button;