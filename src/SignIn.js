import React, { useRef, useState } from "react";
import styled from "styled-components";
import Notification from "./Components/notification/Notification";
import SocialLogin from "./Components/notification/SocialLogin";
import {
  Small,
  Title,
  Highlight,
} from "./Style/StyledTypography";
import { Input, Button } from "./Style/StyledComponents";
import axios from "axios";
import AllLanguages from "./AllLanguages";

const Container = styled.div`
  text-align: center;
`;
const Span = styled.span`
  color: blue;
  cursor: pointer;
`;
const Name = styled(Input)`
  width: 12.3%;
  display: inline;
  margin: 0 0.2%;
  margin-top: 1rem;
`;

const Line = styled.hr`
  color: red;
  display: inline-block;
  width: 10vw;
`;
const HighlightWhite = styled(Highlight)`
  color: #fff;
  letter-spacing: 1px;
`;

function SignIn({setJwttoken}) {
  //Server needs to run on port 3001
  const [signUp, setSignUp] = useState(false);
  //Sent client for axios TODO:Work in progress
  const client = axios.create({
    baseURL: "http://localhost:3001/",
  });

  //Sores the userInput of Loginconst [jwttoken, setJwttoken] = useState(localStorage.getItem("token"));
  const email = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const [language, setLanguage] = useState()

  const [validPassword, setValidPassword] = useState();

  function comparePasswords() {
    const validatorField = document.getElementById("confirm");
    const {value} = password.current
    if (validatorField) {
      if (value === validPassword)
        validatorField.style.border = "3px solid green";

      if (value !== validPassword)
        validatorField.style.border = "3px solid red";
    }
  }

  //TOKEN GET STORED IN LOCAL HOST WE RECIVE FROM BACKEND
  const login = (e, email, password) => {
    e.preventDefault();
    if (!signUp)
      client
        .post("/login", { email, password })
        .then((response) => {
          // Save the JWT token in local storage
          localStorage.setItem("token", response.data.token);
          setJwttoken(response.data.token);
          document.cookie = `token=${response.data.token}`;

          //Sets message for display
          setMessage(response.data.message);

          //clears the Notification
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((err) => {
          setMessage(err.response.data.message);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
  };

  //Signup Function

  const signUpFunction = (e,firstName,lastName ,email, password,language) => {
    console.log(firstName,lastName ,email, password,language)
    e.preventDefault();
    client.post("/signup",{firstName,lastName,email,password,language}).then((response) => {
      //Sets message for display
      setMessage(response.data.message);

      //clears the Notification
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    })
    .catch((err) => {
      setMessage(err.response.data.message);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  };
  const [message, setMessage] = useState();
  //Form for Login
  if (!signUp)
    return (
      <>
        <div>Sign In to Whatever</div>
        {message && <Notification data={message} />}
        <Container>
          <Title>Sign In to Whatever</Title>
          <SocialLogin />
          <Line /> OR <Line />
          <form onSubmit={(e) => login(e, email.current.value, password.current.value)}>
            <Input
              ref={email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Input
              ref={password}
              type="password"
              name="password"
              placeholder="Password"
            />

            <Button type="submit">
              <HighlightWhite>Continue</HighlightWhite>
            </Button>
          </form>
          <Container>
            <div>
              <input type={"checkbox"} name={"rememberme"} />
              <label htmlFor="rememberme">Remember Me</label>
            </div>
            <a href="#" style={{ color: "#56c38d" }}>
              {" "}
              Forgot Password ?
            </a>
          </Container>
          <Line />
          <Small>
            Not a member?
            <Span onClick={() => setSignUp(!signUp)}>Sign Up</Span>
          </Small>
        </Container>
        CHEAT CODE
        all Passwords are test1234
        <form action="https://super-secret-backend.onrender.com/" method="post">
      <button type="submit"><HighlightWhite>Get All Users</HighlightWhite></button>
        </form>
      </>
    );

  //Form for SingUp
  if (signUp)
    return (
      <>
        <div>SignUp</div>
        {message && <Notification data={message} />}
        <Container>
          <Title>SignUp</Title>
          <form onSubmit={(e) => signUpFunction(e,firstName.current.value,lastName.current.value,email.current.value,password.current.value,language)}
          >
            <Name
              ref={firstName}
              type="text"
              placeholder="Firstname"
            />
            <Name
              ref={lastName}
              type="text"
              placeholder="Lastname"
            />
            <Input
              ref={email}
              type="email"
              placeholder="Email"
            />
            <Input
              ref={password}
              type="password"
              placeholder="Password"
            />
            <Input
              id="confirm"
              onChange={(e) => setValidPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              onBlur={comparePasswords()}
            />
            <AllLanguages setLanguage={setLanguage} />
            <Button type="submit">
              <HighlightWhite>Sign Up</HighlightWhite>
            </Button>
          </form>
          <Line />
          <Small>
            Already a member?
            <Span onClick={() => setSignUp(!signUp)}>Sign In</Span>
          </Small>
        </Container>
      </>
    );
}

export default SignIn;
