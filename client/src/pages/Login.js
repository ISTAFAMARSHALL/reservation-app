import { useState } from "react";

function Login({ onLogin }) {
    const [LoggedIn, SetloggedIn] = useState(false);
  
    return (
      <div>
        <h1>Reservation App</h1>
        {/* {LoggedIn ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </>
        )} */}
      </div>
    );
  }
  

  
  export default Login;