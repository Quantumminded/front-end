import React from "react";

export function Type({ handleChange, type }) {
  return (
    <>
      {" "}
      <label
        htmlFor="type"
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        Type
      </label>
      <select
        onChange={handleChange}
        name="type"
        id="type"
        className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
      >
        {type == "document" && (
          <>
            <option value="call">Agentur für Arbeit</option>
            <option value="dokument">Rental Contract</option>
            <option value="translation">Taxes</option>
          </>
        )}
        {type == "call" && (
          <>
            <option value="call">Kita</option>
            <option value="dokument">Work</option>
            <option value="translation">MakeAppointment</option>
          </>
        )}
                {type == "translation" && (
          <>
            <option value="call">Kita</option>
            <option value="dokument">Work</option>
            <option value="translation">MakeAppointment</option>
          </>
        )}
      </select>
    </>
  );
}
