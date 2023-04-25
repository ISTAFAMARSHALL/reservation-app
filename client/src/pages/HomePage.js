import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Editform from "../components/EditForm";

function HomePage ({currentUser , setCurrentUser, setLoggedIn}) {

    const [edit , setEdit] = useState(false)
    
    function handleDeleteAccount(){
        fetch(`/patrons/${currentUser.id}`, { method: "DELETE" })
          .then((r) => r.json())    
            setCurrentUser(null);
            setLoggedIn(false);
    }

    function handleEditAccount(){

    }


    return (
        <>
        <h3>Welcome! {currentUser.name}</h3>
        {edit ? (
            <div>
 
                 <p>{currentUser.phone_number}</p>
                 <p>{currentUser.email_address}</p>
                    <button onClick={()=>setEdit(!edit)} variant="fill" color="primary" >
                        Edit Account Info
                    </button>
            </div>
        ) : (
            <Editform currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        )}
            
        {/* <h3>Welcome! {currentUser.name}</h3>
        
        <p>{currentUser.phone_number}</p>
        <p>{currentUser.email_address}</p>


        
        <Editform currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
        
        <br></br>
        
        <ol>{currentUser.reservations<=0 ? (
            <>
                <h2>No reservations Found</h2>
            </>
        ) : (
                currentUser.reservations.map((r) => (
                <div key={r.id}>
                <h2>Your Reservations</h2>
                <li >
                Restaurant Name:{r.name}
                <br></br>
                Dinner Time:{r.time}
                <br></br>
                Guests:{r.number_of_guests}
                </li>
                </div>)))}
        </ol>

        <br></br>



        <button onClick={handleDeleteAccount} variant="fill" color="primary" >
            Delete your Account
        </button>

        
        </>

    )
}


export default HomePage;

