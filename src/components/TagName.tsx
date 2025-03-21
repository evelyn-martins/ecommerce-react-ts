import React from 'react'

interface TagNameProps {
    children: string;
    onClick: () => void;
}

function TagName({children, onClick}: TagNameProps) {
  return (
    <div className='border border-black100 rounded-full px-4 py-0.5 text-xs font-medium text-black900 flex gap-2 items-center w-fit cursor-pointer' onClick={onClick}>
      {children} <img src='/close.svg' alt='close'/>
    </div>
  )
}

export default TagName
