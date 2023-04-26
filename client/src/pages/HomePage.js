import { useState } from "react";
import { useHistory } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import PatronEditForm from "../components/PatronEditForm";
import ReservationEditForm from "../components/ReservationEditForm"

function HomePage ({currentUser , setCurrentUser, setLoggedIn}) {

    const history = useHistory()

    const [editAccount , setEdit] = useState(false)
    const [editReservation , setEditReservation] = useState(false)
    const [view, setView] = useState(false)
    
    function handleDeleteAccount(){
        fetch(`/patrons/${currentUser.id}`, { method: "DELETE" })
          .then((r) => r.json())    
            setCurrentUser(null);
            setLoggedIn(false);
    }

    function handleDeleteReservation(e){
        fetch(`/reservations/${e}`, { method: "DELETE" })
          .then((r) => r.json())
          .then((user) => setCurrentUser(user))    
    }

    function handleEditAccount(){
        
    }

    return (
        <>
        <h3>Welcome! {currentUser.name}</h3>
        {!editAccount ? (
            <div>
 
                 <p>{currentUser.phone_number}</p>
                 <p>{currentUser.email_address}</p>
                    <button onClick={()=>setEdit(!editAccount)} variant="fill" color="primary" >
                        Edit Account Info
                    </button>
                    
            </div>
        ) : (
            <PatronEditForm currentUser={currentUser} setCurrentUser={setCurrentUser} setEdit={setEdit}/>
        )}
        
        <br></br>
        
        <ol>{currentUser.reservations<=0 ? (
            <>
                <h2>No reservations Found</h2>
            </>
        ) : (
            
            <>
                <h2>Your Reservations</h2>
                
                {currentUser.reservations.map((r) => {
                
                return (
                        
                    <div key={r.id}>

                    <li >
                    Restaurant Name:{r.restaurant.name}
                    <br></br>
                    Dinner Time:{r.time}
                    <br></br>
                    Guests:{r.number_of_guests}
                    </li>
                    
                    {/* <NavLink exact to={`/edit_reservation/${r.id}`}> */}

                    <button onClick={()=> {
                        console.log(r.id)
                        history.push(`/edit_reservation/${r.id}`)}} variant="fill" color="primary" >
                     Edit Reservation
                    </button>

                    {/* </NavLink> */}

                    <button onClick={()=>handleDeleteReservation(r.id)} variant="fill" color="primary" >
                     Canel Reservation
                    </button>
                    <br></br>
                    <br></br>

                    </div> 

                    )})
                    
                }
                <br></br>
                    <button onClick={()=>setView(!view)} variant="fill" color="primary" >
                        View Your Restaurant List
                    </button>
                { !view ? ( "" ): 
                    (currentUser.restaurants.map((r) => {
                        return (
                            <div key={r.id}>
                            <br></br>
                                <ol>
                                    <h3>{r.name}</h3>
                                    <h4>Speciality - {r.cuisine}</h4>
                                    <p>{r.description}</p>
                                </ol>
                            <br></br>
                            </div>)})
                )}

            </>
                )}
        </ol>

        <br></br>

        <button onClick={handleDeleteAccount} variant="fill" color="primary" >
            Delete your Account & All Reservations
        </button>
        
        </>

    )
}

export default HomePage;

