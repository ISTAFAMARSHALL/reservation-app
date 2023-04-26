import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function ReservationEditForm({ currentUser , setCurrentUser}) {

    const history = useHistory()

    const reservation_id = useParams()

    let reservation_to_update = currentUser.reservations.filter((r) => r.id == reservation_id.id)


    const [reservationName, setReservationName] = useState(reservation_to_update[0].name);
    const [reservationGuest, setReservationGuest] = useState(reservation_to_update[0].number_of_guests);
    const [reservationTime, setReservationTime] = useState(reservation_to_update[0].time);



    const [errors, setErrors] = useState([])

    const newReservationInfo ={
        name: reservationName,
        number_of_guests: reservationGuest,
        time: reservationTime,
      }
 
    function handleEditReservation(e) {
      
        e.preventDefault();
        
        fetch(`/reservations/${reservation_to_update[0].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: reservationName,
            number_of_guests: reservationGuest,
            time: reservationTime,
          }),
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
    <form onSubmit={handleEditReservation}>

    <div>
      <h2>Edit Your Reservation</h2>
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

    {/* <div>
      <label>Select a Restaurant</label>
        <select defaultValue={""} onChange={(e) => setReservationRestaurantId(e.target.value)}>
            <option value=""></option> 
            {restaurants.map((r) => <option value={r.id} key={r.id}>{`${r.name}`}</option>)}
        </select>
    </div> */}

    <div>
      <label>Select Reservation Time</label>
        <select value={reservationTime} required placeholder='Select Reservation Time' onChange={(e) => setReservationTime(e.target.value)}>
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

export default ReservationEditForm