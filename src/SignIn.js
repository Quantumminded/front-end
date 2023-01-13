import React, { useState } from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";


function SignIn() {
  //Server needs to run on port 3001
  const [signUp, setSignUp] = useState(false);

  if (!signUp)
    return (
      <>
        <Login
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
