import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactUs from "../../../components/ContactUs/ContactUs";
import Category from "../../CategoryPage/Category/Category";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import HeroSection from "../HeroSection/HeroSection";
import Overview from "../Overview/Overview";

const Home = () => {
  // const [advertises, setadvertises] = useState([])

  const { data: advertises = [], status } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(
        `https://next-car-inky.vercel.app/category-car?advertise=advertise`
      );
      const data = await res.json();
      return data;
    },
  });

  
  console.log(advertises);


  return (
    <div>
      <HeroSection />
      {advertises.length > 0 ? <AdvertisedItems advertises={advertises} /> : ''}
      <Category />
      <Overview />
      <ContactUs />
    </div>
  );
};

export default Home;
