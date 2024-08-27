import React from "react";
import img1 from "../assets/images/banner/7.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full h-full object-cover" alt="Slide 1" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            Get the best service for your car at a price that won't break the
            bank. Our expert mechanics ensure your vehicle is in top shape,
            offering quality services with attention to detail.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide6"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full h-full object-cover" alt="Slide 2" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            Expert Mechanics at Your Service
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            Our team of certified mechanics is dedicated to providing top-notch
            service and ensuring your car is in the best hands possible.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full h-full object-cover" alt="Slide 3" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            Comprehensive Car Maintenance
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            From oil changes to engine repairs, we offer a full range of
            services to keep your car running smoothly.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full h-full object-cover" alt="Slide 4" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            State-of-the-Art Equipment
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            Our garage is equipped with the latest tools and technology to
            diagnose and repair your vehicle efficiently.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide3"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 5 */}
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full h-full object-cover" alt="Slide 5" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            Customer Satisfaction Guaranteed
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            We pride ourselves on delivering exceptional service and ensuring
            our customers are fully satisfied with their experience.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 6 */}
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full h-full object-cover" alt="Slide 6" />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-gradient-to-r from-black/70 to-transparent px-10 py-8">
          <h2 className="text-5xl w-1/2 text-orange-500 mb-4 font-bold">
            Visit Us Today for Your Car Needs
          </h2>
          <p className="text-lg text-white mb-6 w-1/3">
            Drop by our garage for a consultation, and let us help you keep your
            car in top condition with our professional services.
          </p>
          <div>
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white mr-4 rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Get Started
            </button>
            <button className="btn bg-gradient-to-r from-white via-orange-100 to-orange-300 text-orange-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 ease-in-out border-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 flex justify-end bottom-0 p-3">
          <a
            href="#slide5"
            className="btn btn-circle mr-5 bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-white text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
