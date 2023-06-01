import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { addToDb, getJobCart } from "../../utilities/dbmanager";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JobsContext, AppliedJobsContext } from "../Layout/Main";

const JobDetail = () => {
  const [cart, setCart] = useContext(AppliedJobsContext || []);
  const jobDetail = useLoaderData();

  const handleAddToCart = (appliedJob) => {
    // const exists = cart.find((job) => job._id === appliedJob._id);
    // if (exists) {
    //   toast.error("You have already added this job!");
    // } else {
    //   const newCart = [...cart, appliedJob];
    //   setCart(appliedJob);
    //   addToDb(appliedJob._id);
    //   toast.info("Successfully added to the cart.");
    // }

    let newCart = [];
    const exists = cart.find(
      (existingJob) => existingJob._id === appliedJob._id
    );
    if (!exists) {
      //product.quantity = 1;
      newCart = [...cart, appliedJob];
      addToDb(appliedJob._id);
      toast.success("Successfully applied! 🛒", { autoClose: 1500 });
    } else {
      const rest = cart.filter(
        (existingJob) => existingJob._id !== appliedJob._id
      );
      //exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
      toast.error("You have already applied this job!", { autoClose: 1000 });
    }
    setCart(newCart);
  };

  return (
    <div className="">
      <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
        <div className="hidden md:block bg-[url('../public/vector1.png')] bg-no-repeat  bg-left-bottom h-[220px]">
          <h1 className="font-bold text-3xl">Job Details</h1>
        </div>
      </div>
      <div className="container mx-auto px-3 py-5 mt-36 md:px-28 md:py-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-4">
            <p className="text-left p-2">
              <span className="font-bold">Job Description: </span>
              {jobDetail?.description}
            </p>
            <p className="text-left p-2">
              <span className="font-bold">Job Responsibility: </span>
              {jobDetail?.responsibility}
            </p>
            <p className="text-left p-2">
              <span className="font-bold">Requirements: </span>
              {jobDetail.requirements}
            </p>
            <p className="text-left p-2">
              <span className="font-bold">Experiences: </span>
              {jobDetail?.experiences}
            </p>
          </div>
          <div>
            <div className="text-left bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d] border-0 rounded-xl p-5 mb-2">
              <h1 className="font-bold text-lg">Job Details</h1>
              <hr />
              <div className="flex py-2">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                <p className="px-1">
                  <span className="font-bold">Salary:</span> {jobDetail?.salary}{" "}
                  (Per Month)
                </p>
              </div>
              <div className="flex py-2">
                <NewspaperIcon className="h-6 w-6 text-gray-500" />
                <p className="px-1">
                  <span className="font-bold">Job Title:</span>{" "}
                  {jobDetail?.jobtitle}
                </p>
              </div>

              <h1 className="font-bold text-lg pt-2">Contact Information</h1>
              <hr />
              <div className="flex py-2">
                <PhoneIcon className="h-6 w-6 text-gray-500" />
                <p className="px-1">
                  <span className="font-bold">Phone:</span> {jobDetail?.phone}
                </p>
              </div>
              <div className="flex py-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                <p className="px-1">
                  <span className="font-bold">Email:</span> {jobDetail?.email}
                </p>
              </div>
              <div className="flex py-2">
                <MapPinIcon className="h-6 w-6 text-gray-500" />
                <p className="px-1">
                  <span className="font-bold">Address:</span>{" "}
                  {jobDetail?.address}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(jobDetail)}
              className="btn btn-wide border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-2 hover:text-black"
            >
              Apply Now
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetail;
