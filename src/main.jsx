import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Jobs from "./components/Jobs/Jobs";
import JobDetail from "./components/JobDetail/JobDetail";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import jobsAndCartLoader from "./loaders/jobsAndCartLoader";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    loader: jobsAndCartLoader,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch("jobs.json"),
      },
      {
        path: "/jobdetail/:jobId",
        element: <JobDetail></JobDetail>,
        //loader: cartLoader,
        loader: async ({ params }) => {
          const res = await fetch("/jobs.json");
          const data = await res.json();
          const job = data.find((info) => info._id === params.jobId);
          return job;
        },
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        //loader: cartLoader,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
