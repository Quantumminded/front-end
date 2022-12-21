import axios from "axios";
//  baseURL: "https://super-secret-backend.onrender.com/",
 const client = axios.create({
    baseURL: "http://localhost:3001",
    headers:
    {authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJpYXQiOjE2NzE2NDcxNzksImV4cCI6MTY3MTY0ODk3OX0.Ks7Us5bPFd8XAb7BPA5rVtDBUzLeqhtl9SjnNGIhSso"}
  });

  client.post("/login",{email:"test@company.com" ,password:"test1234"}).then(response => console.log(response))