import React from 'react'

function ButtonPrimary({children}: {children: string}) {
  return (
    <button className='px-6 py-3 bg-black900 rounded-sm text-white text-sm font-medium min-w-70 hover:bg-black700 transition-all cursor-pointer'>{children}</button>
  )
}

export default ButtonPrimary
