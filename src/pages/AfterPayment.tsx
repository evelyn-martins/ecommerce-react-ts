import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'

function AfterPayment() {
  return (
    <div>
      <div className='h-40 flex items-center bg-green100 mb-40'>
        <Breadcrumb children='Successful Order' title='Successful Order' />
      </div>
      <div className='flex flex-col items-center mb-40'>
        <img src='/successful order.svg'alt='Successful order' />
        <p className='text-black900 font-bold text-2xl mt-5 mb-4'>Thank you for shopping</p>
        <p className='text-black500 text-sm mb-12'>Your order has been successfully placed and is now being processed.</p>
        <div className='w-49'>
            <Button children='Go to my account' arrow={true} />
        </div>
      </div>
    </div>
  )
}

export default AfterPayment
