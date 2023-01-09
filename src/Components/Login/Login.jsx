import React, { useEffect, useRef, useState, } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Title, Highlight, Small } from "../../Style/StyledTypography";
import { Input, Button } from "../../Style/StyledComponents";
import { useCookies } from "react-cookie";
//Custom Axios client with header & authorization
import { client } from "../../utils/client.mjs";
import toast from "../notification/toastMessage";
import useContextHook from "../../utils/customContextHook";

const Span = styled.span`
  color: #ffcd00;
  cursor: pointer;
`;


const Container = styled.div`
  text-align: center;
`;

const Line = styled.hr`
  color: red;
  display: inline-block;
  width: 10vw;
`;

export default function Login({ setJwttoken, setSignUp, signUp }) {
    //Cookie Hook
    const [cookies, setCookie] = useCookies(["token"]);
    const [loading, setLoading] = useState(false)
    //FORM REFS
    const email = useRef();
    const password = useRef();
    const { setAuthorized, setUser, token } = useContextHook()

    const navigate = useNavigate()
    //TOKEN GET STORED IN LOCAL HOST WE RECIVE FROM BACKEND
    const login = async (e, email, password) => {
        e.preventDefault();

        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(true)
        await client(token)
            .post("/login", { email, password })
            .then((response) => {
                console.log(response)
                const { token, user } = response.data;
                // Save the JWT token in local storage
                localStorage.setItem("token", token);

                setUser(user[0])
                setAuthorized(true)
                setJwttoken(token);
                //Sets Cookie for 1 hour
                setCookie("token", token, { path: "/", maxAge: 3600 });
                // document.cookie = `token=${response.data.token}`;

                //Sets message for display
                setMessage(response.data);

                //clears the Notification
                setTimeout(() => {
                    navigate('/')
                    setMessage(null);
                }, 2000);


            })
            .catch((err) => {
                console.log(err);
                setMessage(err.response.data);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
        //Sets a boolean so we can disable the button while the request is not resolve
        setLoading(false)
    };

    // Notification toast takes type and message from the response
    const [message, setMessage] = useState();
    useEffect(() => {
        if (message) toast(message.type, message.message);
    }, [message]);
    return (
        <>
            {/* {message && <Notification data={message} />} */}
            <Container>

                <div className="bg-white dark:bg-gray-900">
                    <div className="flex justify-center h-screen ">
                        <div
                            className="hidden bg-cover bg-center lg:block lg:w-2/3"
                            style={{
                                backgroundImage:
                                    "url(https://as2.ftcdn.net/v2/jpg/04/59/86/27/1000_F_459862700_blwVQ5me7hzE64Rfe40hX1yycwipwRw1.jpg)",
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
                                        Sign in to access your account
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <form onSubmit={(e) =>
                                        login(e, email.current.value, password.current.value)
                                    }>
                                        <div>
                                            <Input ref={email} type="email" name="email" placeholder="Email" />

                                        </div>

                                        <div className="mt-6">
                                            <Input
                                                ref={password}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div className="mt-6">
                                            <Button
                                                type="submit"
                                                className="px-4 py-2 text-b1 bg-yellow-300 rounded-md shadow hover:bg-gray-800 hover:text-y1"
                                                disabled={loading}
                                            >
                                                <Highlight color="color">{loading ? "Loading..." : "Continue"}</Highlight>
                                            </Button>
                                            <Container>
                                                <div>
                                                    <input type={"checkbox"} name={"rememberme"} />
                                                    <label htmlFor="rememberme"> Remember Me </label>
                                                </div>
                                                <Link to="/" style={{ color: "#56c38d" }}>
                                                    Forgot Password ?
                                                </Link>
                                            </Container>
                                        </div>
                                    </form>
                                    <Small color="grey" className=" text-center p-4">
                                        Not a member?
                                        <Span onClick={() => setSignUp(!signUp)}> Sign Up </Span>
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

