import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const ItemsCategory = () => {

  const [categories, setCategories] = useState([])

  const url = 'http://localhost:5000/category-brand'
  axios(url)
  .then(data => {
    setCategories(data.data)
  })

  return (
    <div className='container mx-auto px-4 lg:px-0 py-16'>
      <h1 className="text-3xl font-semibold text-center mb-8">Browse cars by category</h1>
      

<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
{
  categories.map(category => <div className='flex items-center shadow-lg cursor-pointer px-6 py-5 rounded-lg border' key={category._id}>
    <div><img className={`w-20 mr-4 ${category.bgColor} ${category.bgCircle}`} src={category.image} alt={category.brand} /></div>
    <div>
      <h1 className='text-2xl font-semibold'>{category.brand}</h1>
      <p>{category.tagLine}</p>
    </div>
  </div>)
}
</div>
    </div>
  )
}

export default ItemsCategory