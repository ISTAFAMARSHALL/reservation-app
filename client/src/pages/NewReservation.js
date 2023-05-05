import { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewReservation({ currentUser , setCurrentUser}) {

    const history = useHistory()

    const [reservationName, setReservationName] = useState("");
    const [reservationGuest, setReservationGuest] = useState("");
    const [reservationDay, setReservationDay] = useState("")
    const [reservationTime, setReservationTime] = useState("");
    const [reservationRestaurantId, setReservationRestaurantId] = useState("");

    const [restaurants, Setrestaurants] = useState([]);
    const [errors, setErrors] = useState([])

    const newReservationInfo ={
        name: reservationName,
        number_of_guests: reservationGuest,
        day: reservationDay,
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
    <form  onSubmit={handleNewReservations}>

    <div id='newReservation'>
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
      <label>Select Reservation Day</label>
        <select value={reservationDay} required placeholder='Select Reservation Day' onChange={(e) => setReservationDay(e.target.value)}>
            <option value=""></option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="SSunday">Sunday</option>
        </select>
    </div>

    <div>
      <label>Select Reservation Time</label>
        <select defaultValue={""} required placeholder='Select Reservation Time' onChange={(e) => setReservationTime(e.target.value)}>
            <option value=""></option>
            <option value="4 PM">4 PM</option>
            <option value="5 PM">5 PM</option>
            <option value="6 PM">6 PM</option>
            <option value="7 PM">7 PM</option>
            <option value="8 PM">8 PM</option>
            <option value="9 PM">9 PM</option>
        </select>
    </div>

    <div>
        { errors.length <= 0 ? ("") : (
            errors.map((err) => (
              <li key={err}>{err}</li>
        )))}
    </div>

    <br></br>
    
    <button type="submit" value="Save">Create Reservation</button>

  </form>
  )
}

export default NewReservation