import React, { useContext } from 'react'
import {useQuery} from '@tanstack/react-query'
import { UserContext } from '../../../context/AuthContext'
import axios from 'axios'

const MyPorduct = () => {
    const {user} = useContext(UserContext)

    const {data:allcarsDetails = [], status} = useQuery({
        queryKey: ['email',user?.email],
        queryFn: async () => await axios(`http://localhost:5000/car-details?email=${user?.email}`)
    })
    const cars = allcarsDetails?.data
 
    if(status === 'loading') {
        return <><h1 className="text-3xl font-semibold">Loading</h1></>
    }

  return (
    <div className='lg:px-24 px-4 py-8'>
        
        <h1 className="font-semibold text-center text-3xl mb-8">My Added Car</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-2'>
        {cars?.map((car) => (
          <div
            key={car._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <div className="badge badge-primary absolute shadow-lg right-4 top-4">Available</div>
              <img className='w-full h-64 object-cover' src={car.image} alt={car.carName} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Seller Name: {car.sellerName}</h3>
              </div>

              <div className="card-actions justify-end">
      <button className="btn btn-error">Buy Now</button>
      <button className="btn btn-primary">Boots Now</button>
    </div>
              
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default MyPorduct