import React from 'react'
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems'
import HeroSection from '../HeroSection/HeroSection'
import ItemsCategory from '../ItemsCategory/ItemsCategory'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <AdvertisedItems />
        <ItemsCategory />
    </div>
  )
}

export default Home