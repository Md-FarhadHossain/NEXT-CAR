import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ReportAdmin = () => {
    const [res, setRes] = useState(true);
    const [reportCar, setReportCar] = useState([])
    useEffect(() => {
      fetch('https://next-car-md-farhadhossain.vercel.app/category-car?report=true')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReportCar(data)
        setRes(!res);
      })
      
    }, [reportCar])
    console.log(reportCar)

    const handleCarDelete = (id) => {
        axios(`https://next-car-inky.vercel.app/category-car/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).then((data) => {
          setRes(!res);
          toast.success(`Successfully deleted the Car`);
          console.log(data);
        });
      };
    
  return (
    <div className='grid lg:px-8 md:px-4 px-4  lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-5'>
        {reportCar?.map((car) => (
          <div
            key={car._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <div className="badge badge-primary absolute shadow-lg right-4 top-4">
                Available
              </div>
              <img
                className="w-full h-64 object-cover"
                src={car.image}
                alt={car.carName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.carName}</h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${car.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${car.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {car.yearsOfUse}</h3>
                <h3 className="text-lg">Posted: {car.createdOn}</h3>
                <h3 className="text-lg">Seller Name: {car.sellerName}</h3>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => handleCarDelete(car._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
            
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ReportAdmin