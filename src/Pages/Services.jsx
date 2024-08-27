import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="m-4">
      <div className="p-4 text-center">
        <h4 className="font-extrabold text-2xl text-orange-500">Services</h4>
        <h2 className="text-2xl font-semibold">Our service Area</h2>
        <p>
          Ensure your safety with our comprehensive brake services. From
          inspections to replacements,
          <br /> we provide reliable brake maintenance to keep you secure on the
          road.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
