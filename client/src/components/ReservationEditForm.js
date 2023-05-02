import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function ReservationEditForm({ currentUser , setCurrentUser , newR}) {

  // console.log(newR.id)

    const history = useHistory()

  //   const reservation_id = useParams()

    // let reservation_to_update = currentUser.reservations.filter((r) => r.id == reservation_id.id)


    const [name, setReservationName] = useState(newR.name);
    const [number_of_guests, setReservationGuest] = useState(newR.number_of_guests);
    const [time, setReservationTime] = useState(newR.time);
    const [day, setReservationDay] = useState(newR.day)



    const [errors, setErrors] = useState([])

    // const newReservationInfo ={
    //     name: reservationName,
    //     number_of_guests: reservationGuest,
    //     time: reservationTime,
    //   }
 
    function handleEditReservation(e) {
      
        e.preventDefault();
        
        fetch(`/reservations/${newR.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            number_of_guests,
            day,
            time,
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
          value={name}
          placeholder='Please Enter Name of Reservation'
          onChange={(e) => setReservationName(e.target.value)}
        />
    </div>

    <div>
      <label>Please Enter the Number of Guests</label>
        <input 
          type="text"
          value={number_of_guests}
          placeholder='Please Enter the Number of Guests'
          onChange={(e) => setReservationGuest(e.target.value)}
        />
    </div>

    <div>
      <label>Select Reservation Day</label>
        <select value={day} required placeholder='Select Reservation Day' onChange={(e) => setReservationDay(e.target.value)}>
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
        <select value={time} required placeholder='Select Reservation Time' onChange={(e) => setReservationTime(e.target.value)}>
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


    <button type="submit" value="Save">Update Reservation</button>

  </form>
  )
}

export default ReservationEditForm