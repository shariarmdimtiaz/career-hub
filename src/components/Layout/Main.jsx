import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const JobsContext = createContext([]);
const AppliedJobsContext = createContext([]);
export { JobsContext, AppliedJobsContext };

const Main = () => {
  const { jobs, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  return (
    <JobsContext.Provider value={jobs}>
      <AppliedJobsContext.Provider value={[cart, setCart]}>
        <div className="mx-auto">
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </AppliedJobsContext.Provider>
    </JobsContext.Provider>
  );
};

export default Main;
