import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RestaurantList () {

    const [restaurants, Setrestaurants] = useState([]);

    useEffect(() => {
        fetch("/restaurants")
          .then((r) => r.json())
          .then((data) => Setrestaurants(data));
      }, []);
      
      console.log(restaurants)
      
      let displayRestaurants = restaurants.map((r) => (
        <div key={r.name}>
            <h3>{r.name}</h3>
            <p>{r.cuisine}</p>
            <p>{r.description}</p>
        </div>
      ))

      return (
        <>
            {displayRestaurants}
        </>

    )
}


export default RestaurantList;

