import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage () {

    const [patrons, SetPatrons] = useState([]);

    useEffect(() => {
        fetch("/patrons")
          .then((r) => r.json())
          .then((data) => SetPatrons(data));
      }, []);
      
      let displayPatrons = patrons.map((p) => (
        <div key={p.name}>
        <h3>{p.name}</h3>
        <p>{p.phone_number}</p>
        <p>{p.email_address}</p>
        <ol>{p.reservations<=0 ? (
            <>
                <h2>No reservations Found</h2>
                {/* <button as={Link} to="/new">
                Make a New Reservations
                </button> */}
            </>
        ) : (
                p.reservations.map((r) => (
                <li key={r.id}>
                Dinner Time:{r.time}
                <br></br>
                Guests:{r.number_of_guests}
                </li>)))}
        </ol>
        </div>
      ))

      return (
        <>
            {displayPatrons}
        </>

    )
}


export default HomePage;

