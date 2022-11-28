import React from 'react'
import error from '../../assets/error.jpg'
import Navbar from '../../components/Navbar/Navbar'

const ErrorPage = () => {
  return (
    <div>
        <Navbar />
        
        <img className='w-full h-[90vh] object-contain' src={error} alt="" />
    </div>
  )
}

export default ErrorPage