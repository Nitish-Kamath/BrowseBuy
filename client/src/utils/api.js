import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

// return promise so we use async await
export const fetchDataFromApi = async (url) => {
  try {
    // here we have to pass two thing url and params(end point )
    // data received is stored in data variable
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
