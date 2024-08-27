import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Home;
