import React, { useState } from 'react'
import CarBrandCategory from '../CarBrandCategory/CarBrandCategory'
import ItemsCategory from '../ItemsCategory/ItemsCategory'

const Category = () => {
   
    const [categoryCar,setCategoryCar] = useState([])
  return (
    <div>
        <ItemsCategory setCategoryCar={setCategoryCar} />
        <CarBrandCategory categoryCar={categoryCar} />
    </div>
  )
}

export default Category