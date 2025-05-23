import React from 'react'

interface PaginationProps{
  minusPage: () => void;
  addPage: () => void;
  count: number;
}

function Pagination({minusPage, addPage, count}: PaginationProps) {

  return (
    <div className='flex gap-2 items-center px-2 border border-white200 rounded-sm w-fit h-10'>
      <div className='cursor-pointer'>
        <img src='/chevron left.svg' alt='Chevron left' className='px-1.5 py-1.5' onClick={minusPage} />
      </div>
      <div className='w-10 h-8 bg-white100 flex items-center justify-center rounded-sm'>
        <p className='text-xs font-medium text-black900'>{count}</p>
      </div>
      <div className='cursor-pointer'>
        <img src='/chevron right2.svg' alt='Chevron right' className='px-1.5 py-1.5' onClick={addPage} />
      </div>
    </div>
  )
}

export default Pagination
