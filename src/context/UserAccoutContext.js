import React, { createContext } from 'react'
import { useState } from 'react';

export const AccountType = createContext();

const UserAccoutContext = ({children}) => {



    // Send User Details

    const userDataInsert = (data) => {
       return fetch('https://next-car-inky.vercel.app/user-details', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
    }
 
    

    const value = {userDataInsert}
  return (
    <AccountType.Provider value={value}>{children}</AccountType.Provider>
  )
}

export default UserAccoutContext