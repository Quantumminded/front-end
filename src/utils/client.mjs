import axios from "axios";
//  baseURL: "https://ultra-top-secret-backend-production.up.railway.app/",
const client = (jwttoken) =>
  axios.create({
    baseURL: process.env.REACT_APP_DATABASE_URL,
    headers: { authorization: jwttoken },
  });

export { client };
