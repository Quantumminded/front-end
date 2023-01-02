import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
const client = (jwttoken) =>
  axios.create({
    baseURL: "http://localhost:3001",
    headers: { authorization: jwttoken },
  });

export { client };
