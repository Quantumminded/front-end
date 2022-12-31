import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
//Get the Token in every call of the client("token in here").post() etc.
const client = (jwtToken) =>
  axios.create({
    baseURL: "http://localhost:3001",
    headers: { authorization: jwtToken },
  });

export { client };
