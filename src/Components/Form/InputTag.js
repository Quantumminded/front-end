import React from "react";
import { fullName } from "../../languages";

export default function InputTag({ language, remove, index }) {
  return (
    <>
      <span
        onClick={() => remove(language)}
        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 cursor-pointer"
      >
        {fullName(language)}
      </span>
    </>
  );
}
