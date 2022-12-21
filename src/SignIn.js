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
const Name = styled(Input)``;

function SignIn() {
  //Server needs to run on port 3001
  const [jwttoken, setJwttoken] = useState(localStorage.getItem("token"));
  const [signUp, setSignUp] = useState(false);
  const client = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      Authorization: `Bearer ${jwttoken}`,
    },
  });
  const email = useRef();
  const password = useRef();

  function handleEmail(e) {
    email.current = e.target.value;
  }
  function handlePassword(e) {
    password.current = e.target.value;
    setPassword2(e.target.value);
  }

  const [password2, setPassword2] = useState();

  //TOKEN GET STORED IN LOCAL HOST WE RECIVE FROM BACKEND
  const login = (e, email, password) => {
    e.preventDefault();
    if (!signUp)
      client.post("/login", { email, password }).then((response) => {
        // Save the JWT token in local storage
        localStorage.setItem("token", response.data.token);
        setJwttoken(response.data.token);
      });
      // if(signUp)
      // client.post("/signup", { email, password,firstName,lastName,languages,phonenumber }).then((response) => {
      //   // Save the JWT token in local storage
      //   localStorage.setItem("token", response.data.token);
      //   setJwttoken(response.data.token);
      // });
  };

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
  if (!signUp)
    return (
      <>
        <div>SignIn</div>
        <Container>
          <Title>Login</Title>
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
            Not a member?{" "}
            <Span onClick={() => setSignUp(!signUp)}>Sign Up</Span>
          </Small>
          <Subtitle>Facebook</Subtitle>
          <Subtitle>Apple</Subtitle>
          <Subtitle>Email</Subtitle>

          <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </Container>
      </>
    );
  if (signUp)
    return (
      <>
        <div>SignUp</div>
        <Container>
          <Title>SignUp</Title>
          <form onSubmit={(e) => login(e, email.current, password.current)}>
            <label for="firstName">Firstname</label>
            <Name type="text" name="firstName" placeholder="Firstname" />
            <Name type="text" name="lastName" placeholder="Lastname" />
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
            <Input
              onChange={(e) => handlePassword(e)}
              type="password"
              placeholder="Confirm Password"
            />
            <AllLanguages/>
            <Button type="submit">
              <Highlight>Sign Up</Highlight>
            </Button>
          </form>
          <Small>
            Already a member?{" "}
            <Span onClick={() => setSignUp(!signUp)}>Sign In</Span>
          </Small>
        </Container>
      </>
    );
}

export default SignIn;
