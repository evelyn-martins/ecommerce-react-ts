import React from 'react'

interface IProductQuantityProps{
  selectedQuantity: number;
  setSelectedQuantity: (quantity: number) => void;
  addQuantity?: () => void;
  minusQuantity?: () => void;
}

function ProductQuantity({selectedQuantity, setSelectedQuantity, addQuantity, minusQuantity}: IProductQuantityProps) {

  const handleAdd = () => {
    if(selectedQuantity < 100){
      setSelectedQuantity(selectedQuantity+1);
      
      if(addQuantity){
        addQuantity();
      }
    }
  }

  const handleMinus = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity-1);

      if(minusQuantity){
        minusQuantity();
      }
    }
  }

  return (
    <div className='flex gap-10.5 border border-black100 rounded-sm w-fit px-4 h-11 items-center'>
      <img src='/Minus.svg' alt='Minus' className='cursor-pointer px-0.5 py-0.5' onClick={handleMinus}/>
      <p className='text-black800 font-medium text-sm'>{selectedQuantity}</p>
      <img src='/Add.svg' alt='Add' className='cursor-pointer px-0.5 py-0.5' onClick={handleAdd}/>
    </div>
  )
}

export default ProductQuantity
