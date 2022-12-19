import React, { useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ItemsCategory = () => {
  const [categories, setCategories] = useState([]);
  
 

  const url = "https://next-car-inky.vercel.app/category-brand";
  useEffect(() => {
    axios(url).then((data) => {
      setCategories(data.data);
    });
  }, []);


  return (
    <div  data-aos="fade-up"
         data-aos-duration="1000" className="container mx-auto px-4 lg:px-0 py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Browse cars by category 
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            className="shadow-lg cursor-pointer px-6 py-5 rounded-lg border"
            key={category._id}
          >
            <div className="flex items-center">
              <div>
                <img
                  className={`w-20 mr-4 ${category.bgColor} ${category.bgCircle}`}
                  src={category.image}
                  alt={category.brand}
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{category.brand}</h1>
                <p>{category.tagLine}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to={`/category/${category?.brand}`} className="text-2xl btn btn-sm">{<AiOutlineArrowRight />}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsCategory;
