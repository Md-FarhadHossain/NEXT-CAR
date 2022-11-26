import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Category from '../../CategoryPage/Category/Category'
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems'
import HeroSection from '../HeroSection/HeroSection'
import Overview from '../Overview/Overview'


const Home = () => {

  const [advertises, setadvertises] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/category-car?advertise=advertise`)
    .then(res => res.json())
    .then(data => {
      setadvertises(data)
    })
  },[])

  console.log(advertises)
  
  return (
    <div>
        <HeroSection />
       {advertises.length > 0 ?  <AdvertisedItems advertises={advertises} /> : ''}
        <Category />
        <Overview />
    </div>
  )
}

export default Home