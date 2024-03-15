import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="frontpage">
      <h1>Welcome To The Application!</h1>
      <div className="logoutbtn">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>

  )
};

export default LoginButton;
