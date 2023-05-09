import { useState } from "react";
import PatronEditForm from "../components/PatronEditForm";

function HomePage ({currentUser , setCurrentUser, setLoggedIn, handle_EditReservation}) {

    const [editAccount , setEdit] = useState(false)
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
          .then((data) => {

            let updated_reservations = currentUser.reservations.filter((e) => e.id !== data.id)
            let updated_restaurants = currentUser.restaurants.filter((e) => e.id !== data.restaurant.id)
            
            const updatedUser = {
              id: currentUser.id,
              name: currentUser.name,
              phone_number: currentUser.phone_number,
              email_address: currentUser.email_address,
              username: currentUser.username,
              password_digest: currentUser.password_digest,
              password_confirmation: currentUser.password_confirmation,
              reservations: [... updated_reservations],
              restaurants: [... updated_restaurants]
            }
            
            setCurrentUser(updatedUser)
        })    
    }
    
    return (
        <main>
        <h3>Hello {currentUser.name}!</h3>
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
                    Restaurant Name: {r.restaurant.name}
                    <br></br>
                    Dinner Day: {r.day}
                    <br></br>
                    Dinner Time: {r.time}
                    <br></br>
                    Guests: {r.number_of_guests}
                    </li>
                    <br></br>

                    <button onClick={() => handle_EditReservation(r)} variant="fill" color="primary" >
                     Edit Reservation
                    </button>

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
        
        </main>

    )
}

export default HomePage;

