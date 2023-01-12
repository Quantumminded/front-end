import React from 'react';
import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
    <ul className="flex justify-around">
         <li className="m-2">
           <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
             <Link to="/Category/document">Documents</Link>
           </button>
         </li>
         <li className="m-2">
           <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
             <Link to="/Category/call">Calls</Link>
           </button>
         </li>
         <li className="m-2">
           <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm">
             <Link to="/Category/translation">Translations</Link>
           </button>
         </li>
       </ul>
  )
}

export default CategoryButtons