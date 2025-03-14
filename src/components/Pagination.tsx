import React from 'react'

function Pagination() {
  return (
    <div className='flex gap-2 items-center px-2 border border-white200 rounded-sm w-fit h-10'>
      <div className='cursor-pointer'>
        <img src='/chevron left.svg' alt='Chevron left' className='px-1.5 py-1.5'/>
      </div>
      <div className='w-10 h-8 bg-white100 flex items-center justify-center rounded-sm'>
        <p className='text-xs font-medium text-black900'>1</p>
      </div>
      <div className='cursor-pointer'>
        <img src='/chevron right2.svg' alt='Chevron right' className='px-1.5 py-1.5'/>
      </div>
    </div>
  )
}

export default Pagination
