import React from "react";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ReviewJob = ({ job, handleRemoveFromCart }) => {
  return (
    <div className="px-2 md:px-24">
      <div className="md:flex justify-between p-5 border border-indigo-500 rounded-lg mt-5">
        <div className="md:flex">
          <img
            src={job.logo}
            className="object-contain w-60 max-h-20 my-auto"
            alt=""
          />
          <div className="text-left">
            <p className="font-bold text-xl px-3">{job.jobtitle}</p>
            <p className="text-base px-3">{job.company}</p>
            <p className="px-3 py-2">
              <span className="font-bold text-transparent text-base text-left bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-2 py-1 mr-2 border border-blue-600 rounded">
                {job.type}
              </span>
              <span className="font-bold text-transparent text-base text-left bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-2 py-1 ml-2 border border-blue-600 rounded">
                {job.status}
              </span>
            </p>
            <div className="px-3 py-1 flex">
              <MapPinIcon className="h-6 w-6 text-gray-400" />
              <p className="">
                <span className="font-bold">Address:</span> {job.address}
              </p>
            </div>
            <div className="px-3 py-1 flex">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              <p className="md:px-2">
                <span className="font-bold">Salary: </span>
                {job.salary}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/jobdetail/${job._id}`}>
            <button className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mr-2 hover:text-black">
              View Details
            </button>
          </Link>
          <button
            onClick={() => handleRemoveFromCart(job._id)}
            className="btn-delete"
          >
            <TrashIcon className="h-6 w-6 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewJob;
