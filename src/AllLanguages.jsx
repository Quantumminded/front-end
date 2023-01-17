import React from 'react'
import { languages } from './languages'

export default function AllLanguages({ setLanguage, handleLanguages, name }) {
    function handleLanguage(e) {
        //handleLanguages for Creating a Request/Offer
        if (handleLanguages) handleLanguages(e)
        //setLanguage for signUp
        if (setLanguage) setLanguage([e.target.value])
    }

    return (
        <>
            {/* The name propertie is used to destinguisch beetwen fromLanguage and toLanguage in the Component PostRequest */}
            <select onChange={(e) => handleLanguage(e)} id="languages" name={name ? name : "languages"} className="bg-gray-50 border border-y2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option>Select Language</option>
                {/* Get first the Array of Numbers with .keys later then map through and use the number to get the option */}
                {Object.keys(languages).map((ele) => {
                    //Checks the system Language and finds it in the languages array 
                    const userLanguage = languages.find(ele => ele.code == navigator.language.slice(0, 2))
                    return (

                        <option value={languages[ele].code} selected={languages[ele] == userLanguage && 'selected'}>{languages[ele].name}</option>
                    )
                })}
            </select>
        </>
    )
}
