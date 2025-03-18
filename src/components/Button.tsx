import React from 'react'

interface ButtonProps {
    children: string;
    arrow: boolean;
    onClick?: () => void;
}

function Button({ children, arrow, onClick }: ButtonProps) {
  return (
    <button className='text-sm text-white font-medium bg-black900 px-6 py-3 rounded-sm hover:bg-black700 transition-all cursor-pointer flex w-full justify-center' onClick={onClick}>
        {children}
        {arrow && <img src='/arrow.svg' alt='arrow' className='ml-3'/>}
    </button>
  )
}

export default Button
