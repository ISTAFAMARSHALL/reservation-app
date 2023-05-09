import React from 'react'
import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { UserContext } from "../context/user";


function Navbar({setLoggedIn}) {

    const { setCurrentUser} = useContext(UserContext)

    function handleLogOut() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null);
          setLoggedIn(false);
    }

  return (
    <div id='navbar'>
      
        <NavLink className="button"
            exact 
            to="/"
          ><button>My Account</button></NavLink>

        <NavLink className="button"
              exact
              to="/new"
            ><button>New Reservation</button></NavLink>

        <NavLink className="button"
              exact
              to="/restaurants"
            ><button>View Restaurants</button></NavLink>

          <NavLink className="button"
              exact
              to="/logout"
            ><button onClick={() => {
                setLoggedIn(false)  
                handleLogOut()}}>Logout</button>
            </NavLink>
    </div>    
  )
}

export default Navbar