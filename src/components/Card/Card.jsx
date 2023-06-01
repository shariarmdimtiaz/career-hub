import React from "react";

const Card = ({ job }) => {
  return (
    <div>
      <div className="">
        <div className="card w-50 bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d] shadow-xl hover:bg-[#a98cf752]">
          <div className="flex justify-start p-2">
            <img src={job.icon} alt="" className="h-28 rounded-xl" />
          </div>
          <div className="card-body items-start text-center">
            <h2 className="card-title">{job.category}</h2>
            <p>{job.jobs} Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
