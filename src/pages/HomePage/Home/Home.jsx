import React from 'react'
import Category from '../../CategoryPage/Category/Category'
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems'
import HeroSection from '../HeroSection/HeroSection'


const Home = () => {
  return (
    <div>
        <HeroSection />
        <AdvertisedItems />
        <Category />
    </div>
  )
}

export default Home