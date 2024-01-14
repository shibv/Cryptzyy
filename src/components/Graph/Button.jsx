import React, { Children } from 'react'

const Button = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className='bg-[#001e3c] text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-gray-700 '>
         {children}
    </span>
  )
}

export default Button
