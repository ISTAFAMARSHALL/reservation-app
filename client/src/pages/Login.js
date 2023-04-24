import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({setCurrentUser, setLoggedIn}) {
    const [signedup, setSignedup] = useState(false);
  
    return (
      <div>
        {/* <LoginForm /> */}
        {/* <SignUpForm setSignedup={setSignedup} signedup={signedup}/> */}

        {signedup ? (
          <LoginForm setLoggedIn={setLoggedIn} setSignedup={setSignedup} setCurrentUser={setCurrentUser}/>
        ) : (
          <SignUpForm setLoggedIn={setLoggedIn} setSignedup={setSignedup} setCurrentUser={setCurrentUser}/>
        )}

      </div>
    );
  }
  

  
  export default Login;