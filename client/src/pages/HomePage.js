import { useState } from "react";
import Editform from "../components/EditForm";

function HomePage ({currentUser , setCurrentUser, setLoggedIn}) {

    const [edit , setEdit] = useState(false)
    
    function handleDeleteAccount(){
        fetch(`/patrons/${currentUser.id}`, { method: "DELETE" })
          .then((r) => r.json())    
            setCurrentUser(null);
            setLoggedIn(false);
    }

    return (
        <>
        <h3>Welcome! {currentUser.name}</h3>
        {!edit ? (
            <div>
 
                 <p>{currentUser.phone_number}</p>
                 <p>{currentUser.email_address}</p>
                    <button onClick={()=>setEdit(!edit)} variant="fill" color="primary" >
                        Edit Account Info
                    </button>
                    
            </div>
        ) : (
            <Editform currentUser={currentUser} setCurrentUser={setCurrentUser} setEdit={setEdit}/>
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
                
                    const restaurants = currentUser.restaurants.filter((e) => {
                        if (e.id == r.restaurant_id) {
                            return e.name
                                } else {
                            return ""
                   }} )
                    
                return (
                    <div key={r.id}>
                    <li >
                    Restaurant Name:{restaurants[0].name}
                    <br></br>
                    Dinner Time:{r.time}
                    <br></br>
                    Guests:{r.number_of_guests}
                    </li>
                    <br></br>
                    </div>)})}
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

