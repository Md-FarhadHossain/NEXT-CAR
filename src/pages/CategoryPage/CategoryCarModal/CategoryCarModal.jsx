import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/AuthContext'

const CategoryCarModal = () => {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div>


{/* Put this part before </body> tag */}
<input type="checkbox" id="categoryCarrModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="categoryCarrModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{user.email}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
    </div>
  )
}

export default CategoryCarModal