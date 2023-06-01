import { getJobCart } from "../utilities/dbmanager";

const jobsAndCartLoader = async () => {
  const loadedJobs = await fetch("jobs.json");
  const jobs = await loadedJobs.json();

  // if cart data is in database, you have to use async await

  const initialCart = [];
  const storedCart = getJobCart();
  for (const id in storedCart) {
    const addedJob = jobs.find((jb) => jb._id === id);
    if (addedJob) {
      //const quantity = storedCart[id];
      //addedJob.quantity = quantity;
      initialCart.push(addedJob);
    }
  }
  return { jobs, initialCart };
};

export default jobsAndCartLoader;
