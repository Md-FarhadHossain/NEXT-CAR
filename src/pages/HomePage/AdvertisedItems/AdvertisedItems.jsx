import React from 'react'

const AdvertisedItems = ({advertises}) => {
  console.log(advertises)
  return (
    <div className='container mx-auto px-4 lg:px-0 py-16'>

      <h1 className="text-3xl text-center font-semibold pb-8">Advertised items</h1>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
      {advertises?.map((advertise) => (
          <div
            key={advertise._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <div className="badge badge-primary absolute shadow-lg right-4 top-4">
                Available
              </div>
              <img
                className="w-full h-64 object-cover"
                src={advertise.image}
                alt={advertise.carName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{advertise.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${advertise.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${advertise.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {advertise.yearsOfUse}</h3>
                <h3 className="text-lg">Posted: {advertise.createdOn}</h3>
                <h3 className="text-lg">Seller Name: {advertise.sellerName}</h3>
              </div>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdvertisedItems