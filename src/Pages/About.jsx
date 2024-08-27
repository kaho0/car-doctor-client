import React from "react";
import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute right-5 border-8 border-white top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-3">
          <h3 className="font-extrabold p-2 text-2xl text-orange-500">
            About Us
          </h3>
          <h1 className="text-5xl p-2 font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-2">
            Our car garage provides expert services to keep your vehicle in top
            shape. From quick maintenance to detailed repairs, our skilled team
            ensures your car runs smoothly.
          </p>
          <p className="py-2">
            Trust us for reliable automotive care. We offer efficient solutions
            and quality service to meet all your car maintenance needs with
            confidence.
          </p>

          <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
