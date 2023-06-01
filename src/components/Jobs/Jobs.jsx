import React from "react";
import Job from "../Job/Job";
import { useState } from "react";

const Jobs = ({ jobs }) => {
  const [showAll, setShowAll] = useState(false);
  const handleSeeAll = () => {
    setShowAll(true);
  };

  return (
    <div className="container pt-14 px-5 md:px-20">
      <h1 className="font-bold text-3xl pt-12">Featured Jobs</h1>
      <p className="py-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {showAll
          ? jobs.map((job) => <Job key={job._id} job={job}></Job>)
          : jobs.slice(0, 4).map((job) => <Job key={job._id} job={job}></Job>)}
      </div>
      <div className="py-8">
        {!showAll && (
          <button
            onClick={handleSeeAll}
            className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:text-black"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
