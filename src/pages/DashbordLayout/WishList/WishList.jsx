import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/AuthContext";


const WishList = () => {
  const {user} = useContext(UserContext)
  const { data: wishCar = [], status } = useQuery({
    queryKey: ['wishList'],
    queryFn: async () => {
      const res = await fetch(
        `https://next-car-inky.vercel.app/wishlist?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  })
  
  const  wishList = wishCar
  console.log(wishList)

  return( 
  <div className="">
     <div className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
     {wishList?.map((wish) => (
          <div
            key={wish._id}
            className="card rounded-md card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-64 object-cover"
                src={wish.image}
                alt={wish.wishCar.carName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">{wish.wishCar.carName} <span className="cursor-pointer hover:text-pink-600 w-8 h-8 rounded-full flex justify-center items-center text-pink-600 hover:bg-pink-100"> <AiFillHeart /> </span></h2>
              <div>
                <h3 className="text-lg">
                  Original Price: ${wish.wishCar.originalPrice}
                </h3>
                <h3 className="text-lg">Resale Price: ${wish.wishCar.resalePrice}</h3>
                <h3 className="text-lg">Years Of Use: {wish.wishCar.yearsOfUse}</h3>
                <h3 className="text-lg">Location: {wish.wishCar.location}</h3>
                <h3 className="text-lg">Posted: {wish.wishCar.createdOn}</h3>
                <h3 className="text-lg flex">Seller Name:{' '} <span className="flex items-center ml-2"> {wish.wishCar.sellerName} {wish.wishCar.status === 'verified' ? <><img className="w-5 ml-1" src="https://cdn-icons-png.flaticon.com/512/6364/6364343.png" alt="" /></>: ''}</span></h3>

                <div className="card-actions justify-end">
      <Link to={`/dashbord/payment/${wish?.wishCar._id}`} className="btn btn-primary">Pay Now</Link>
    </div>
              </div>

              
              
            </div>
          </div>
        ))}


        
     </div>
  </div>)
};

export default WishList;
