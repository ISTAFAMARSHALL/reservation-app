import { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewReservation({ currentUser , setCurrentUser}) {

    const history = useHistory()

    const [reservationName, setReservationName] = useState("");
    const [reservationGuest, setReservationGuest] = useState("");
    const [reservationTime, setReservationTime] = useState("");
    const [reservationRestaurantId, setReservationRestaurantId] = useState("");

    const [restaurants, Setrestaurants] = useState([]);
    const [errors, setErrors] = useState([])

    const newReservationInfo ={
        name: reservationName,
        number_of_guests: reservationGuest,
        time: reservationTime,
        patron_id: currentUser.id,
        restaurant_id: reservationRestaurantId,
      }

      useEffect(() => {
          fetch("/restaurants")
            .then((r) => r.json())
            .then((data) => Setrestaurants(data));
        }, []);

    function handleNewReservations(e) {
        e.preventDefault();

        fetch("reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReservationInfo)
        }).then((response) => {
          if (response.ok) {
            response.json().then((user) => {
              setCurrentUser(user)
              history.push("/")
            });
          } else {
            response.json().then((e) => setErrors(e.errors));
          }
        });
      }

  return (
    <form onSubmit={handleNewReservations}>

    <div>
      <label>Please Enter Name of Reservation</label>
        <input 
          type="text"
          value={reservationName}
          placeholder='Please Enter Name of Reservation'
          onChange={(e) => setReservationName(e.target.value)}
        />
    </div>

    <div>
      <label>Please Enter the Number of Guests</label>
        <input 
          type="text"
          value={reservationGuest}
          placeholder='Please Enter the Number of Guests'
          onChange={(e) => setReservationGuest(e.target.value)}
        />
    </div>

    <div>
      <label>Select a Restaurant</label>
        <select defaultValue={""} onChange={(e) => setReservationRestaurantId(e.target.value)}>
            <option value=""></option> 
            {restaurants.map((r) => <option value={r.id} key={r.id}>{`${r.name}`}</option>)}
        </select>
    </div>

    <div>
      <label>Select Reservation Time</label>
        <select defaultValue={""} required placeholder='Select Reservation Time' onChange={(e) => setReservationTime(e.target.value)}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>

    <div>
        { errors.length <= 0 ? ("") : (
            errors.map((err) => (
              <li key={err}>{err}</li>
        )))}
    </div>


    <button type="submit" value="Save">Create Reservation</button>

  </form>
  )
}

export default NewReservation