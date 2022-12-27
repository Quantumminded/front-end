import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
 const client = (jwtToken) => axios.create({
    baseURL: "http://localhost:3001",
    headers:
    {authorization:jwtToken}
  });

  export {client}