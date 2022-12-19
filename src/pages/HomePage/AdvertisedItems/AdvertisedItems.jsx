import React from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { UserContext } from '../../../context/AuthContext'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";

const AdvertisedItems = ({advertises}) => {
  const {user} = useContext(UserContext)
  const handleReport = (car) => {
    console.log(car._id)

    const report = {
      report: 'true'
    }

    fetch(`https://next-car-md-farhadhossain.vercel.app/category-car/${car._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(report)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      toast.success(`Repoted to admin`);
    })
  }
  const handleOrderSubmit = (car) => {
    toast.success(`Car is booked ${car?.carName}`);

    const carData = {
      image: car?.image,
      resalePrice: car?.resalePrice,     
      carName: car?.carName,
      userEmail: user?.email,
      paid: 'false'
    }


    fetch(`https://next-car-md-farhadhossain.vercel.app/my-order`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(carData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  };
  console.log(advertises)
  return (
    <div data-aos="fade-up"
         data-aos-duration="3000" className='container mx-auto px-4 lg:px-0 py-16'>

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
             <div className='flex items-center justify-between'>
             <h2 className="card-title flex items-center justify-between">{advertise.carName} <div className="flex items-center">
                <span
                 
                  className="cursor-pointer hover:text-pink-600 w-8 h-8 rounded-full flex justify-center items-center hover:bg-pink-100"
                >
                  {" "}
                   <AiOutlineHeart />
                </span> <span onClick={() => handleReport(advertise)} className="cursor-pointer" title="Report to Admin"><CiFlag1 /></span>
                </div></h2>
              
             </div>
              <div>
                <h3 className="text-lg">
                  Original Price: <span className="font-semibold">${advertise.originalPrice}</span>
                </h3>
                <h3 className="text-lg">Resale Price: <span className="font-semibold">${advertise.resalePrice}</span></h3>
                <h3 className="text-lg">Years Of Use: <span className="font-semibold">{advertise.yearsOfUse}</span></h3>
                <h3 className="text-lg">Posted: <span className="font-semibold">{advertise.createdOn}</span></h3>
                <h3 className="text-lg flex">Seller Name: {' '} <span className="flex font-semibold items-center ml-2"> {advertise.sellerName} {advertise.status === 'verified' ? <><img className="w-4 ml-1" src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" alt="" /></>: ''}</span></h3>
              </div>
              <div className="card-actions justify-end">
                {/* The button to open modal */}
                <label htmlFor={advertise?._id} className="btn">
                  Book Now
                </label>

                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id={advertise?._id}
                  className="modal-toggle"
                />
              
                  <div key={advertise?._id} className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor={advertise?._id}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">{advertise?.carName}</h3>
                      <h3 className="text-lg font-bold">{advertise?.location}</h3>

                      <div>
                        <input
                          type="text"
                          defaultValue={user?.displayName}
                          placeholder="Type"
                          className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                        />
                        <input
                          type="text"
                          defaultValue={user?.email}
                          placeholder="Type"
                          className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                        />
                        <input
                          type="text"
                          defaultValue={`$ ${advertise?.resalePrice}`}
                          placeholder="Type"
                          className="input input-bordered w-full my-2 bg-base-200 border-none pointer-events-none"
                        />

                        <h3 className="text-lg font-semibold">Call me: {advertise?.mobileNumber}</h3>
                        <h3 className="text-lg font-semibold">
                          Meet Loaction: {advertise?.location}
                        </h3>

                        <label
                          onClick={() => handleOrderSubmit(advertise)}
                          htmlFor={advertise?._id}
                          className="btn w-full"
                        >
                          Sumbit
                        </label>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdvertisedItems