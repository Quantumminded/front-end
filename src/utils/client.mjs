import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
//Get the Token in every call of the client("token in here").post() etc.
const token = localStorage.getItem("token");
const client = axios.create({
  baseURL: "http://localhost:3001",
  headers: { authorization: token },
});

export { client };
