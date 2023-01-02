import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
const client = (jwttoken) =>
  axios.create({
    baseURL: process.env.REACT_APP_DATABASE_URL,
    headers: { authorization: jwttoken },
  });

export { client };
