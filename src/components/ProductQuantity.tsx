import React, { useState } from 'react'

function ProductQuantity() {

  const [count, setCount] = useState<number>(1);

  const handleAdd = () => {
    if(count < 100){
      setCount(count+1);
    }
  }

  const handleMinus = () => {
    if (count > 1) {
      setCount(count-1);
    }
  }

  return (
    <div className='flex gap-10.5 border border-black100 rounded-sm w-fit px-4 h-11 items-center'>
      <img src='/Minus.svg' alt='Minus' className='cursor-pointer px-0.5 py-0.5' onClick={handleMinus}/>
      <p className='text-black800 font-medium text-sm'>{count}</p>
      <img src='/Add.svg' alt='Add' className='cursor-pointer px-0.5 py-0.5' onClick={handleAdd}/>
    </div>
  )
}

export default ProductQuantity
