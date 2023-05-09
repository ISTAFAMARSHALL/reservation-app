import { useEffect , useState, useContext} from "react";
import React from 'react';
import { Route, Switch} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import RestaurantList from "./pages/RestaurantList"
import NewReservation from "./pages/NewReservation"
import NavBar from "./components/NavBar"
import ReservationEditForm from "./components/ReservationEditForm"
import { UserContext } from "./context/user";


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [newR, setNewR] = useState([])
  const {setCurrentUser} = useContext(UserContext);

  const history = useHistory()

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)});
    }});
  }, [setCurrentUser]);

  function handle_EditReservation(r){
    history.push(`/edit_reservation/`)
    setNewR(r)
}

  return (
      <div>
        
        {!loggedIn ? (
            <Login setLoggedIn={setLoggedIn}/>
        ) : (
          <>
            <h1>Reservation App</h1>
            <NavBar setLoggedIn={setLoggedIn} />
            <Switch>

              <Route path="/edit_reservation/">
                <ReservationEditForm newR={newR}/>
              </Route>

              <Route path="/new">
                <NewReservation />
              </Route>

              <Route path="/restaurants">
                <RestaurantList/>
              </Route>
            
              <Route path="/">
                <HomePage setLoggedIn={setLoggedIn} handle_EditReservation={handle_EditReservation}/>
              </Route>

            </Switch>
          </>
        )}  
        
      </div>
  );
}

export default App;
