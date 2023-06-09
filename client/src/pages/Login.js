import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ setLoggedIn}) {
    const [signedup, setSignedup] = useState(false);
  
    return (
      <>
      <h1>Reservation App</h1>
      <div id='login'>

        {signedup ? (
          <LoginForm setLoggedIn={setLoggedIn} setSignedup={setSignedup}/>
        ) : (
          <SignUpForm setLoggedIn={setLoggedIn} setSignedup={setSignedup}/>
        )}

      </div>
      </>
    );
  }
  

  
  export default Login;