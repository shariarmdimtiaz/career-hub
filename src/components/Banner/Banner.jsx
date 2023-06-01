import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-5 py-36 md:py-0">
      <div className="md:flex justify-between">
        <div className="my-auto">
          <h1 className="font-bold text-5xl text-left text-black py-2">
            One Step
          </h1>
          <h1 className="font-bold text-5xl text-left text-black py-2">
            Closer To Your
          </h1>
          <h1 className="font-extrabold text-transparent text-5xl text-left bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Dream Job
          </h1>
          <p className="text-left py-2">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="md:text-left">
            <button className="btn btn-primary border-0 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] mt-2 hover:text-black">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/11/20/19/jobs-3599406_1280.png"
            className="w-2/4 py-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
