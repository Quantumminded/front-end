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
        <Login
          setJwttoken={setJwttoken}
          setSignUp={setSignUp}
          signUp={signUp}
        />
      </>
    );
  //Form for SingUp
  if (signUp)
    return (
      <>
        <SignUp setSignUp={setSignUp} signUp={signUp} />
      </>
    );
}

export default SignIn;
