import React from 'react';
import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
    // <ul className="flex justify-around bg-grey-100">
    //      <li className="py-3">
    //        <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm bg-b2">
    //          <Link to="/Category/document">Documents</Link>
    //        </button>
    //      </li>
    //      <li className="py-3">
    //        <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm bg-b2">
    //          <Link to="/Category/call">Calls</Link>
    //        </button>
    //      </li>
    //      <li className="py-3">
    //        <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-sm lg:btn-sm bg-b2">
    //          <Link to="/Category/translation">Translations</Link>
    //        </button>
    //      </li>
    //    </ul>

    <div class="space-y-5">
  <div class="border-b border-b-gray-200">
    <ul class="-mb-px flex items-center gap-4 text-sm font-medium">
      <li class="flex-1">
        <Link to="/Category/call" className="relative flex items-center justify-center gap-2 px-1 py-3 text-b2 hover:text-y2">
          Calls
        </Link>
      </li>
      <li className="flex-1">
        <Link to="/Category/document" className="flex items-center justify-center gap-2 px-1 py-3 text-b2 hover:text-y2">
          Documents
        </Link>
      </li>
      <li className="flex-1">
        <Link to="/Category/translation" className="flex items-center justify-center gap-2 px-1 py-3 text-b2 hover:text-y2">
          Translations
        </Link>
      </li>
     
      
    </ul>
  </div>
  </div>





  )
}

export default CategoryButtons