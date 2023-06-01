import React, { useContext } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Footer from "../Footer/Footer";
import { JobsContext } from "../Layout/Main";

const Home = () => {
  //const jobs = useLoaderData();
  const jobs = useContext(JobsContext || []);

  return (
    <div>
      <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d] mx-auto">
        <Banner></Banner>
      </div>
      <div className="container mx-auto">
        <Category></Category>
        <Jobs jobs={jobs}></Jobs>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
