import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Small, Title, Highlight } from "../../Style/StyledTypography";
import { Input, Button } from "../../Style/StyledComponents";
import AllLanguages from "../../AllLanguages";
import { useCookies } from "react-cookie";
//Custom Axios client with header & authorization
import { client } from "../../utils/client.mjs";
import toast from "../notification/toastFunction";

const Container = styled.div`
  text-align: center;
`;
const Span = styled.span`
  color: #ffcd00;
  cursor: pointer;
`;

const Line = styled.hr`
  color: red;
  display: inline-block;
  width: 10vw;
`;

export default function SignUp() {

    const email = useRef();
    const password = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const [language, setLanguage] = useState();

    const [validPassword, setValidPassword] = useState();

    //Signup Function
    const signUpFunction = (
        e,
        firstName,
        lastName,
        email,
        password,
        language
    ) => {
        console.log(firstName, lastName, email, password, language);
        e.preventDefault();
        client()
            .post("/signup", { firstName, lastName, email, password, language })
            .then((response) => {
                //Sets message for display
                setMessage(response.data);

                //clears the Notification
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            })
            .catch((err) => {
                setMessage(err.response.data);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
    };

    function comparePasswords() {
        const validatorField = document.getElementById("confirm");
        const { value } = password.current;
        if (validatorField) {
            if (value === validPassword)
                validatorField.style.border = "2px solid green";

            if (value !== validPassword)
                validatorField.style.border = "2px solid red";
        }
    }

    // Notification toast takes type and message from the response
    const [message, setMessage] = useState();
    useEffect(() => {
        if (message) toast(message.type, message.message);
    }, [message]);
    return (
        <>
            <Title color="white" className="text-center">Join Us</Title>
            <div className="flex justify-center">
                <form onSubmit={(e) =>
                    signUpFunction(
                        e,
                        firstName.current.value,
                        lastName.current.value,
                        email.current.value,
                        password.current.value,
                        language
                    )}>
                    <div className="relative z-0 mb-6 w-full group">
                        <input ref={email} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input ref={password} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div >
                    <div className="relative z-0 mb-6 w-full group" >
                        <input
                            onChange={(e) => setValidPassword(e.target.value)}
                            onBlur={comparePasswords} id="confirm" type="password" name="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Confirm password</label >
                    </div >
                    <div className="grid md:grid-cols-2 md:gap-6" >
                        <div className="relative z-0 mb-6 w-full group" >
                            <input ref={firstName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > First name</label >
                        </div >
                        <div className="relative z-0 mb-6 w-full group" >
                            <input ref={lastName} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Last name</label >
                        </div >
                    </div >
                    <AllLanguages setLanguage={setLanguage} />
                    <Button
                        type="submit"
                        className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
                    >
                        <Highlight color="color">Sign Up</Highlight>
                    </Button>
                </form >
            </div >
        </>
    )
}
