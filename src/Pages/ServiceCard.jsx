import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card  m-3 card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/${_id}`}>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Book Now
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Add this line for `_id`
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ServiceCard;
