import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
const client = (jwttoken) =>
  axios.create({
    baseURL: "https://ultra-top-secret-backend-production.up.railway.app/",
    headers: { authorization: jwttoken },
  });

export { client };
