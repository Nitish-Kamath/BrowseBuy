import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// // useFetch is a method which requiers endpoint
// // and will call api call and return that data
// const useFetch = (endpoint) => {
//   const [data, setData] = useState();

//   //useEffect will be called for every endpoint change
//   useEffect(async () => {
//     makeApiCall();
//   }, [endpoint]);

//   const makeApiCall = async () => {
//     const res = await fetchDataFromApi(endpoint);
//     setData(res);
//   };
//   return { data };
// };

// export default useFetch;

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await fetchDataFromApi(endpoint);
        setData(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData(null); // Optionally handle error by setting data to null or keeping the old data
      }
    };

    // Call the function right after defining it
    fetchData();
  }, [endpoint]); // Depend on endpoint, rerun fetchData when endpoint changes

  return { data };
};

export default useFetch;
