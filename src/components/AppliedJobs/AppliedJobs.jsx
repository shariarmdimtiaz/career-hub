import React, { useContext, useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/dbmanager";
import { useLoaderData } from "react-router-dom";
import ReviewJob from "../ReviewJob/ReviewJob";
import { JobsContext, AppliedJobsContext } from "../Layout/Main";

const AppliedJobs = () => {
  //const savedCart = useLoaderData();
  const [cart, setCart] = useContext(AppliedJobsContext || []);

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((job) => job._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteJobCart();
  };

  const handleOptionChange = (event) => {
    const onsiteJob = cart.filter((job) => job.type === "Onsite");
    const remoteJob = cart.filter((job) => job.type === "Remote");
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Fetch data based on selected option
    if (selectedValue === "option1") {
      // Fetch data for Option 1
      setData(cart);
    } else if (selectedValue === "option2") {
      // Fetch data for Option 2
      setData(onsiteJob);
    } else if (selectedValue === "option3") {
      // Fetch data for Option 3
      setData(remoteJob);
    } else {
      // Reset data for default option
      setData([]);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
        <div className="hidden md:block bg-[url('../public/vector1.png')] bg-no-repeat  bg-left-bottom h-[220px]">
          <h1 className="font-bold text-3xl">Applied Jobs</h1>
        </div>
      </div>
      <div className="py-5 mt-36 md:mt-0">
        <div className="flex justify-center md:justify-end md:px-24">
          <h1 className="font-bold text-lg">Select type:</h1>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Filter By</option>
            <option value="option1">All</option>
            <option value="option2">On-site</option>
            <option value="option3">Remote</option>
          </select>
        </div>
        {data.length > 0 &&
          data.map((job) => (
            <ReviewJob
              key={job._id}
              job={job}
              handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewJob>
          ))}
        {data.length < 1 &&
          cart.map((job) => (
            <ReviewJob
              key={job._id}
              job={job}
              handleRemoveFromCart={handleRemoveFromCart}
            ></ReviewJob>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
