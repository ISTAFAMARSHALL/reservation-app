import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage ({currentUser}) {

    return (
        <>
            <h3>{currentUser.id}</h3>
        <p>{currentUser.phone_number}</p>
        <p>{currentUser.email_address}</p>
        <ol>{currentUser.reservations<=0 ? (
            <>
                <h2>No reservations Found</h2>
                {/* <button as={Link} to="/new">
                Make a New Reservations
                </button> */}
            </>
        ) : (
                currentUser.reservations.map((r) => (
                <li key={r.id}>
                Dinner Time:{r.time}
                <br></br>
                Guests:{r.number_of_guests}
                </li>)))}
        </ol>
        </>

    )
}


export default HomePage;

