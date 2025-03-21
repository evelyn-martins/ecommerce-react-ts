import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page404() {

    const navigate = useNavigate();

  return (
    <div className='h-screen flex flex-col items-center bg-white100 pt-10'>
      <img src='/404.png' alt='Page 404' className='h-80 w-80' />
      <p className='text-5xl font-bold text-black900'>Page Not Found</p>
      <p className='text-lg text-black300 mt-3 w-130 text-center'>It looks like the page you're looking for doesn't exist or has been moved. Don't worry, though! You can:</p>
      <button className='bg-black900 text-white px-6 py-1.5 rounded-full mt-8 cursor-pointer hover:bg-black700 transition-all' onClick={() => {
      window.scroll(0, 0);  
      navigate("/")}}>Go Home</button>
    </div>
  )
}

export default Page404
