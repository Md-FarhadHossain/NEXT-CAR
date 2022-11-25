import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../../../context/AuthContext'

const AllSellers = () => {

    const [sellers, setSellers] = useState([])
    const {user} = useContext(UserContext)

useEffect(() => {
    fetch(`http://localhost:5000/user-details?accountType=Seller`)
    .then(res => res.json())
    .then(data => {
        console.log(data) 
        setSellers(data)
        
    })

 
}, [])


  


  
      console.log(sellers)
  return (
    <div className='px-4 lg:px-8'>

<div className="overflow-x-auto w-full">
  <table className="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>No. </th>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
     
        {sellers.map((seller, i) =>  <tr key={seller._id}>
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
              <div className="font-bold">{seller.name}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        
        <th>
          <button className="btn btn-error text-white btn-xs">Delete</button>
        </th>
      </tr>)}

    </tbody>
    
  </table>
</div>
    </div>
  )
}

export default AllSellers