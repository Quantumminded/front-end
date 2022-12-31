import React, { useState } from "react";
import styled from "styled-components";
import { Small } from "./Style/StyledTypography";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";

const Span = styled.span`
  color: #ffcd00;
  cursor: pointer;
`;

function SignIn({ setJwttoken }) {
  //Server needs to run on port 3001
  const [signUp, setSignUp] = useState(false);

  if (!signUp)
    return (
      <>
        <Login setJwttoken={setJwttoken} />
        <Small color="grey" className=" text-center p-4">
          Not a member?
          <Span onClick={() => setSignUp(!signUp)}> Sign Up </Span>
        </Small>
      </>
    );
  //Form for SingUp
  if (signUp)
    return (
      <>
        <SignUp />
        <Small color="grey" className=" text-center p-4">
          Already a member?
          <Span onClick={() => setSignUp(!signUp)}> Sign In </Span>
        </Small>
      </>
    );
}

export default SignIn;
