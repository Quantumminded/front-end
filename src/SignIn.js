import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  Small,
  Body,
  Highlight,
  Subtitle,
  Title,
  Headings,
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

function SignIn() {
  //Server needs to run on port 3001
  const [jwttoken, setJwttoken] = useState(localStorage.getItem("token"));
  const [signUp, setSignUp] = useState(false);
  //Sent client for axios TODO:Work in progress
  const client = axios.create({
    baseURL: "https://super-secret-backend.onrender.com/",
  });

  //Sores the userInput of Login
  const email = useRef();
  const password = useRef();

  const [validPassword, setValidPassword] = useState();

  //Handels the inputs
  function handleEmail(e) {
    email.current = e.target.value;
  }
  function handlePassword(e) {
    password.current = e.target.value;
  }

  function comparePasswords() {
    const validatorField = document.getElementById("confirm");
    if (validatorField) {
      if (password.current === validPassword)
        validatorField.style.border = "3px solid green";

      if (password.current !== validPassword)
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
          setMessage(response.data.message);
        })
        .catch((err) => setMessage(err.response.data.message));
  };

  const [message, setMessage] = useState();
  //Form for Login
  if (!signUp)
    return (
      <>
        <div>SignIn</div>
        <Container>
          <Title>Login</Title>
          {message}
          <form onSubmit={(e) => login(e, email.current, password.current)}>
            <Input
              onChange={(e) => handleEmail(e)}
              type="email"
              name="email"
              placeholder="Email"
            />
            <Input
              onChange={(e) => handlePassword(e)}
              type="password"
              name="password"
              placeholder="Password"
            />

            <Button type="submit">
              <Highlight>Sign In</Highlight>
            </Button>
          </form>
          <Small>
            Not a member?
            <Span onClick={() => setSignUp(!signUp)}>Sign Up</Span>
          </Small>
          <Subtitle>Facebook</Subtitle>
          <Subtitle>Apple</Subtitle>
          <Subtitle>Email</Subtitle>
        </Container>
        <p>Email: test@company.com</p>
        <p>Password: test1234</p>
      </>
    );

  //Form for SingUp
  if (signUp)
    return (
      <>
        <div>SignUp</div>
        <Container>
          <Title>SignUp</Title>
          <form
            action="https://super-secret-backend.onrender.com/signup"
            method="POST"
          >
            <Name type="text" name="firstName" placeholder="Firstname" />
            <Name type="text" name="lastName" placeholder="Lastname" />
            <Input type="email" name="email" placeholder="Email" />
            <Input
              onChange={(e) => handlePassword(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <Input
              id="confirm"
              onChange={(e) => setValidPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              onBlur={comparePasswords()}
            />
            <AllLanguages />
            <Button type="submit">
              <Highlight>Sign Up</Highlight>
            </Button>
          </form>
          <Small>
            Already a member?
            <Span onClick={() => setSignUp(!signUp)}>Sign In</Span>
          </Small>
        </Container>
      </>
    );
}

export default SignIn;
