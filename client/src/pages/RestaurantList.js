import { useState } from "react";
import { useEffect } from "react";
import NewRestaurant from "./NewRestaurant";

function RestaurantList () {

    const [restaurants, setrestaurants] = useState([]);
    const [addRestaurant, setAddRestaurant] = useState(false);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch("/restaurants")
        .then((response) => {
            if (response.ok) {
              response.json().then((data) => {
                setrestaurants(data);
              });
            } else {
              response.json().then((e) => setErrors(e.errors));
            }
          });
      }, [setrestaurants]);
      
      let displayRestaurants = restaurants.map((r) => (
        <div key={r.id}>
            
            <br></br>
            <h3>{r.name}</h3>
            <p>{r.cuisine}</p>
            <p>{r.description}</p>
            <br></br>
        </div>
      ))

      return (
        <>
            <br></br>
            <br></br>
            <h5>View</h5>
            <h5>Restaurants</h5>
            <h5>Below</h5>
            <br></br>
            <button id='addrestaurant' onClick={()=>setAddRestaurant(!addRestaurant)}>Add New Restaurant</button>
            <br></br>
            {addRestaurant ? (
              <NewRestaurant restaurants={restaurants} setrestaurants={setrestaurants} addRestaurant={addRestaurant} setAddRestaurant={setAddRestaurant}/> 
            ) : ( "")}
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

