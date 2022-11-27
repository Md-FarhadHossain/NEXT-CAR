import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Payment = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>Payment</div>
  )
}

export default Payment