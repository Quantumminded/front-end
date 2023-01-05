import React, { useState, useEffect } from "react";


function Test() {
    const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://super-secret-backend.onrender.com/task/all`);
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>Test</div>
  )
}

export default Test