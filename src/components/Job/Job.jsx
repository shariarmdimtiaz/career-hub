import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import JobDetail from "../JobDetail/JobDetail";

const Job = ({ job }) => {
  return (
    <div className="border rounded-xl p-6">
      <figure className="px-8">
        <img src={job.logo} alt="" className="w-auto h-14" />
      </figure>
      <div className="card-body items-start text-left">
        <h2 className="card-title">{job.jobtitle}</h2>
        <p>{job.company}</p>
        <p className="py-2">
          <span className="font-bold text-transparent text-base text-left bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-2 py-1 mr-2 border border-blue-600 rounded">
            {job.type}
          </span>
          <span className="font-bold text-transparent text-base text-left bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-2 py-1 ml-2 border border-blue-600 rounded">
            {job.status}
          </span>
        </p>
        <div className="flex">
          <MapPinIcon className="h-6 w-6 text-gray-500" />
          <p className="mr-2">{job.address}</p>
          <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
          <p className="">Salary: {job.salary}</p>
        </div>
        <Link to={`/jobdetail/${job._id}`}>
          <button className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-2 hover:text-black">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
