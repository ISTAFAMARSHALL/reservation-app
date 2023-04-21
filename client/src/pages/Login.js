import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
    const [LoggedIn, SetloggedIn] = useState(true);
  
    return (
      <div>

        {!LoggedIn ? (
          <LoginForm/>
        ) : (
          <SignUpForm/>
        )}

      </div>
    );
  }
  

  
  export default Login;