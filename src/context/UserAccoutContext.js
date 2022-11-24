import React, { createContext } from 'react'

export const AccountType = createContext();

const UserAccoutContext = ({children}) => {


    // User Details

    const userDataInsert = (data) => {
       return fetch('http://localhost:5000/user-details', {
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