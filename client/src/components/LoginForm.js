import React, { useState } from "react";

function LoginForm({ setSignedup , setCurrentUser }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user)
          setSignedup(true)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input
          type="text"
          id="username"
        //   autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="password"
        //   autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button variant="fill" color="primary" type="submit">
          Login
        </button>
      </div>

      {/* <div>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </div> */}

      <br></br>
      <div> Don't Have an Account?
        <button onClick={()=>setSignedup(false)} variant="fill" color="primary" >
          SignUp
        </button>
      </div>

    </form>
  );
}

export default LoginForm;