import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage ({currentUser}) {

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
        </>

    )
}


export default HomePage;

