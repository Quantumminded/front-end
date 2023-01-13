import React, { useEffect, useRef, useState } from "react";
import { Title, Highlight, Small } from "../../Style/StyledTypography";
import styled from "styled-components";

import { Button } from "../../Style/StyledComponents";
import AllLanguages from "../../AllLanguages";
//Custom Axios client with header & authorization
import { client } from "../../utils/client.mjs";
import toast from "../notification/toastMessage";
const Span = styled.span`
  color: #ffcd00;
  cursor: pointer;
`;


const Container = styled.div`
  text-align: center;
`;

export default function SignUp({ setSignUp, signUp }) {

    const email = useRef();
    const password = useRef();
    const firstname = useRef();
    const lastname = useRef();
    const [language, setLanguage] = useState();

    const [validPassword, setValidPassword] = useState();
    //For Awaiting promise
    const [loading, setLoading] = useState(false)

    //Signup Function
    const signUpFunction = async (
        e,
        firstname,
        lastname,
        email,
        password,
        language
    ) => {
        e.preventDefault();
        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(true)
        await client()
            .post("/signup", { firstname, lastname, email, password, language })
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
        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(false)
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
            <Container>

                <div className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center h-screen">
                        <div
                            className="hidden bg-cover lg:block lg:w-2/3"
                            style={{
                                backgroundImage:
                                    "url(https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
                            }}
                        >
                            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div>
                                    <h2 className="text-4xl font-bold text-white">Brand</h2>

                                    <p className="max-w-xl mt-3 text-gray-300">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                        autem ipsa, nulla laboriosam dolores, repellendus
                                        perferendis libero suscipit nam temporibus molestiae
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                            <div className="flex-1">
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                                        Brand
                                    </h2>

                                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                                        Create an Account
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <form onSubmit={(e) =>
                                        signUpFunction(
                                            e,
                                            firstname.current.value,
                                            lastname.current.value,
                                            email.current.value,
                                            password.current.value,
                                            language
                                        )}>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input ref={email} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_email" className=" left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                        <div className="relative z-0 mb-6 w-full group">
                                            <input ref={password} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_password" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        </div >
                                        <div className="relative z-0 mb-6 w-full group" >
                                            <input
                                                onChange={(e) => setValidPassword(e.target.value)}
                                                onBlur={comparePasswords} id="confirm" type="password" name="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                            <label htmlFor="floating_repeat_password" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Confirm password</label >
                                        </div >
                                        <div className="grid md:grid-cols-2 md:gap-6" >
                                            <div className="relative z-0 mb-6 w-full group" >
                                                <input ref={firstname} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_first_name" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > First name</label >
                                            </div >
                                            <div className="relative z-0 mb-6 w-full group" >
                                                <input ref={lastname} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label htmlFor="floating_last_name" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" > Last name</label >
                                            </div >
                                        </div >
                                        <AllLanguages setLanguage={setLanguage} />
                                        <Button
                                            type="submit"
                                            className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
                                            disabled={loading}
                                        >
                                            <Highlight color="color">{loading ? "Loading..." : "Sign Up"}</Highlight>
                                        </Button>
                                    </form >
                                    <Small color="grey" className=" text-center p-4">
                                        Already a member?
                                        <Span onClick={() => setSignUp(!signUp)}> Sign In </Span>
                                    </Small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
