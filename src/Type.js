import React from "react";

export function Type({ handleChange, type }) {
  return (
    <>
      {" "}
      <label
        htmlFor="type"
        className="pb-2 text-sm font-bold text-gray-800"
      >
        Type
      </label>
      <select
        onChange={handleChange}
        name="type"
        id="type"
        className="bg-transparent border border-y2 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
      >
        {type === "document" && (
          <>
            <option value="forms">Forms</option>
            <option value="documents">Documents</option>
            <option value="application">Application</option>
            <option value="late_submissions">late submissions</option>
            <option value="contract">Contract</option>
          </>
        )}
        {type === "call" && (
          <>
            <option value="outbound">Do a Call</option>
            <option value="inbound">Recieve a Call</option>
          </>
        )}
        {type === "translation" && (
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
