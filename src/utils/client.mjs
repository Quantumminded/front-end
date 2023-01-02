import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
const client = (jwttoken) =>
  axios.create({
    baseURL: "https://super-secret-backend.onrender.com/",
    headers: { authorization: jwttoken },
  });

export { client };
