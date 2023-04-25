import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function EditForm({ currentUser , setCurrentUser, setEdit}) {

  const history = useHistory()

  const [username, setUsername] = useState(currentUser.username);
  const [name, setName] = useState(currentUser.name);
  const [phone_number, setPhoneNumber] = useState(currentUser.phone_number);
  const [email_address, setEmailAddress] = useState(currentUser.email_address);
  const [errors, setErrors] = useState([]);
  
  function handleSignUp(e) {
    e.preventDefault();

    fetch(`patrons/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone_number,
        email_address,
        username
      }),
    })
      .then((r) => {
        if(r.ok) {
          r.json().then((user) => {
            setEdit(false)
            history.push("/");
            setCurrentUser(user)
          })
        } else {
          r.json().then((err) => setErrors(err.errors));
        }})
}

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div>
        <label>Email Address</label>
        <input
          type="text"
          id="emailAddress"
          value={email_address}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      
      <div>
        <label>username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button variant="fill" color="primary" type="submit">
          Submit
        </button>
      </div>

      <div>
        { errors.length <= 0 ? ("") : (
                errors.map((err) => (
          <li key={err}>{err}</li>
        )))}
      </div>

    </form>
  );
}

export default EditForm;