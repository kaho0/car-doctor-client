import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleCheckout = async (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const date = form.date.value;
    const dueAmount = form.dueAmount.value;

    const booking = {
      firstName,
      lastName,
      phone,
      title,
      img,
      email,
      message,
      date,
      dueAmount,
      serviceId: _id,
    };

    try {
      // Check for duplicate booking first
      const existingBookingResponse = await fetch(
        `http://localhost:5000/bookings?serviceId=${_id}&email=${email}`
      );

      const existingBookings = await existingBookingResponse.json();

      if (existingBookings.length > 0) {
        Swal.fire({
          icon: "warning",
          title: "Booking Already Exists",
          text: "You have already booked this service.",
        });
        return; // Stop further execution
      }

      // Proceed with creating a new booking
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Booking Confirmed",
          text: "Your booking has been successfully confirmed.",
        });
        form.reset(); // Clear the form after successful submission
      } else {
        throw new Error(result.message || "Failed to book the service");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong, please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">Check Out</h1>
          <p className="text-sm text-gray-500">
            Home / Checkout / <span className="font-bold">{title}</span>
          </p>
        </div>
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                placeholder="Your Email"
                className="input input-bordered"
                required
                readOnly={user}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="number"
                name="dueAmount"
                defaultValue={price}
                placeholder="Due Amount"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white w-full rounded-md shadow-md hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-orange-500 transition-all duration-300 ease-in-out border-none">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
