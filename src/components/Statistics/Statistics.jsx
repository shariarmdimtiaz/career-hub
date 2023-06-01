import React from "react";
import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";

const data = [
  { name: "Assignment 1", value: 60, fill: "#8884d8" },
  { name: "Assignment 2", value: 60, fill: "#83a6ed" },
  { name: "Assignment 4", value: 60, fill: "#82ca9d" },
  { name: "Assignment 3", value: 60, fill: "#8dd1e1" },
  { name: "Assignment 5", value: 60, fill: "#a4de6c" },
  { name: "Assignment 6", value: 60, fill: "#d0ed57" },
  { name: "Assignment 7", value: 60, fill: "#ffc658" },
  { name: "Assignment 8", value: 56, fill: "#ffa726" },
];

const Statistics = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d]">
        <div className="hidden md:block bg-[url('../public/vector1.png')] bg-no-repeat  bg-left-bottom h-[220px]">
          <h1 className="font-bold text-3xl">Statistics</h1>
        </div>
      </div>
      <div className="container mx-auto text-center mt-36 md:mt-0">
        <div className="flex justify-center items-center">
          <RadialBarChart
            width={800}
            height={800}
            innerRadius="20%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={0}
            className="border rounded-lg mt-3"
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              dataKey="value"
            />
            <Tooltip />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="top"
              align="left"
              wrapperStyle={{ fontSize: 12 }}
            />
          </RadialBarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
