import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Benefits from "../Components/Landingpage/Benefits";
import Features from "../Components/Landingpage/Features";
import Header from "../Components/Landingpage/Header";
import Hero from "../Components/Landingpage/Hero";
import Footer from "../Components/Landingpage/Footer";
import OurExperts from "../Components/Landingpage/OurExperts";
import Blogs from "../Components/Landingpage/Blogs";
import PriceTable from "../Components/Landingpage/PriceTable";
import Testimonials from "../Components/Landingpage/Testimonials";
import BottomCTA from "../Components/Landingpage/BottomCTA";

const Landingpage = () => {
    const navigate = useNavigate();

  return (
    <div>
      <Header />

      <Hero />

      <Features />

      <Benefits/>

      <OurExperts/>

      <Blogs/>

      <PriceTable/>

      <Testimonials/>

      {/* <BottomCTA/> */}

      <Footer/>
    </div>
  );

};
export default Landingpage;
