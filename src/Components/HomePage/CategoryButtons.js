import React from 'react';
import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
<div>
    <ul class="flex items-center gap-2 text-sm font-medium">
      <li class="flex-1">
        <Link
          to="/Category/document" 
          class="relative flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700" >
          Documents
          </Link>
      </li>
      <li class="flex-1">
        <Link
          to="/Category/call"
          class="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700"  >
          Calls
          </Link>
      </li>
      <li class="flex-1">
        <Link
          to="/Category/translation"
          class="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700" >
          Translations
          </Link>
      </li>
    </ul>
  </div>

  )
}

export default CategoryButtons