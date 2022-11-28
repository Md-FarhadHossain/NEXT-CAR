import React, { useEffect, useState } from 'react'

const AllBuyers = () => {
    const [buyers, setBuyer] = useState([])

useEffect(() => {
    fetch(`https://next-car-inky.vercel.app/user-details?accountType=Buyer`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        setBuyer(data)
        
    })

 
}, [])

  return (
    <div>
    <div className='px-4 lg:px-8'>

<div className="overflow-x-auto w-full">
  <table className="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No. </th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
     
        {buyers.map((buyer, i) =>  <tr key={buyer._id}>
        <th>
          {i + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{buyer.name}</div>
            </div>
          </div>
        </td>
        <td>
          {buyer.email}
          <br/>
        </td>
        
        <th>
          <button className="btn btn-error text-white btn-xs">Delete</button>
        </th>
      </tr>)}

    </tbody>
    
  </table>
</div>
    </div>
    </div>
  )
}

export default AllBuyers