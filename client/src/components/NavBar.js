import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar({setLoggedIn , setCurrentUser}) {

    function handleLogOut() {
        fetch("/logout", { method: "DELETE" })
        setCurrentUser(null);
          setLoggedIn(false);
      //   .then((r) => {
      // if (r.ok) {
      //   r.json().then((data) => {
          
      // }
      //   });
    }

  return (
    <div id='navbar'>
      
        {/* <NavLink className="button"
            exact 
            to="/"
          ><button onClick={() => {
            setGenreForm("true")
            setGameForm("true")}} >Home</button></NavLink> */}

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
                handleLogOut("true")}}>Logout</button>
            </NavLink>
    </div>    
  )
}

export default Navbar