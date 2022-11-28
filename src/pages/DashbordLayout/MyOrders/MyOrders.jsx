import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/AuthContext'

const MyOrders = () => {
  const [orderDetails, setOrderDetails] = useState([])
  const [remain, setRemain] = useState([])
  const [a, setA] = useState('')
  const [carId, setCarId] = useState('')
  const {user} = useContext(UserContext)


  useEffect(() => {
    fetch(`https://next-car-md-farhadhossain.vercel.app/my-order?userEmail=${user?.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setOrderDetails(data)
    })
  
    
  }, [user?.email])



  useEffect(() => {
    fetch(`https://next-car-md-farhadhossain.vercel.app/payments`)
    .then(res => res.json())
    .then( data => {
      console.log(data)
      setRemain(data)
    })
   
  },[])

 
  console.log(carId)

  // console.log(orderDetails)
  // console.log(remain)

  // const remainingCar = orderDetails.filter(car => car._id ===  remain.carID)
  // console.log(remainingCar)

  // const handleSubmit = (id) => {
  //   console.log(id)
  //   fetch(`https://next-car-md-farhadhossain.vercel.app/payments?carID=${id}`)
  //   .then(res => res.json())
  //   .then( data => {
  //     console.log(data)
  //     setRemain(data)
  //   })
  // }

  const remainingCar = orderDetails.filter(order => order?._id === fetch(`https://next-car-md-farhadhossain.vercel.app/payments?carID=${order?._id}`).then(res => res.json()).then(data => {
    console.log(data)
    if(data[0].carID === order?._id ){
      console.log(true)
      setA(data[0].carID)
    }
  }))
  console.log(remainingCar)
  console.log(a)

  console.log(orderDetails)

  return (

    <div>
      
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
         NO.
        </th>
        <th>Car Name</th>
        <th>Your Email</th>
        <th>Pay Info</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        orderDetails.map((order, i) => {
         
          return <tr>
          <th>
            {i + 1}
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={order.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{order.carName}</div>
                
              </div>
            </div>
          </td>
          <td>
            {order.userEmail}
            <br/>
           
          </td>
         
          <th>
            <form>
            <Link  to={`/dashbord/payment/${order?._id}`} className="btn  btn-xs">{a ? 'paid': 'pay now'}</Link>
            </form>
          </th>
        </tr>
        })
      }

    </tbody>

    
  </table>
</div>
    </div>
  )
}

export default MyOrders