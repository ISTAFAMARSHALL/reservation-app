import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage ({currentUser , setCurrentUser, setLoggedIn}) {
    
    function handleDeleteAccount(){
        fetch(`/patrons/${currentUser.id}`, { method: "DELETE" })
          .then((r) => r.json())    
            setCurrentUser(null);
            setLoggedIn(false);
    }

    


    return (
        <>
            <h3>{currentUser.name}</h3>
        <p>{currentUser.phone_number}</p>
        <p>{currentUser.email_address}</p>
        <br></br>
        <h2>Your Reservations</h2>
        <ol>{currentUser.reservations<=0 ? (
            <>
                <h2>No reservations Found</h2>

            </>
        ) : (
                currentUser.reservations.map((r) => (
                <li key={r.id}>
                Restaurant Name:{r.name}
                <br></br>
                Dinner Time:{r.time}
                <br></br>
                Guests:{r.number_of_guests}
                </li>)))}
        </ol>

        <br></br>
          
        <button onClick={handleDeleteAccount} variant="fill" color="primary" >
            Delete your Account
        </button>
        
        </>

    )
}


export default HomePage;

