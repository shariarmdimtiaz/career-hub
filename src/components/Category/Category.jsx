import React, { useEffect, useState } from "react";
import account from "../../assets/icons/accounts.png";
import creative from "../../assets/icons/creative.png";
import media from "../../assets/icons/social-media.png";
import chip from "../../assets/icons/chip.png";
import Card from "../Card/Card";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <div className="pt-14">
        <h1 className="font-bold text-3xl pt-12">Job Category List</h1>
        <p className="py-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {
            data.map((job) => <Card key={job.id} job={job}></Card>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Category;
