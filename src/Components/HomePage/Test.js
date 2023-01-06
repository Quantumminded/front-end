import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

function Test({ language }) {
    const [tasks, setTasks] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://super-secret-backend.onrender.com/api/task/all");
        const data = await res.json();
        setTasks(data);
      }
      fetchData();
    }, []);

    
  
    return (
    <>
        {tasks.map((task) => (
      <div key={task.id} className="wrapper bg-gray-400 antialiased text-gray-900 mb-10">
        
          <div className="bg-white ">
            <Link to="/ProductDetails">
              <div className="relative bottom-0 left-0 rounded-lg">
                <div className="absolute bottom-14 right-0 p-3 bg-transparent">
                  {/* TEST FLEG  */}
                  {task.languages.map((language) => (
                    <img
                      key={language}
                      className="p-2"
                      src={`https://flagcdn.com/24x18/${language.toLowerCase()}.png`}
                      alt="language"
                    />
                  ))}
                </div>
                <img
                  className="w-full shadow rounded"
                  src="https://picsum.photos/400/300"
                  alt="pic"
                />
              </div>
            </Link>
            <div className="relative px-4 -mt-8">
              <div className="bg-cyan-200 p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    {task.type}
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    {task.languages[0]} | {task.languages[1]}
                  </div>
                </div>
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  {task.description}
                </h4>
                <div className="mt-1">
                  {task.price}
                  <span className="text-gray-600 text-sm"> /h</span>
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    {} ratings{" "}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on {} ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  );
}

export default Test;