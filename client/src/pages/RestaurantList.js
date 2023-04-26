import { useState } from "react";
import { useEffect } from "react";

function RestaurantList () {

    const [restaurants, Setrestaurants] = useState([]);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                Setrestaurants(data);
              });
            } else {
              response.json().then((e) => setErrors(e.errors));
            }
          });
      }, []);
      
      let displayRestaurants = restaurants.map((r) => (
        <div key={r.name}>
            <br></br>
            <h3>{r.name}</h3>
            <p>{r.cuisine}</p>
            <p>{r.description}</p>
            <br></br>
        </div>
      ))

      return (
        <>
            {displayRestaurants}

            <div>
                { errors.length <= 0 ? ("") : (
                        errors.map((err) => (
                <li key={err}>{err}</li>
                )))}
            </div>

        </>

    )
}

export default RestaurantList;

