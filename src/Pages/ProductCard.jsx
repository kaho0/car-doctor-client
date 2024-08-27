import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, img, price, rating } = product;

  return (
    <div className="card m-3 card-compact bg-base-100 w-96 shadow-xl">
      <figure className="flex justify-center items-center">
        <img
          src={img}
          alt={title}
          className="w-32 h-32 object-contain" // Adjust the size here
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-orange-500" : "text-gray-300"}
            />
          ))}
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="font-medium">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
