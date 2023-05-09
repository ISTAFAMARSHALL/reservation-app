import { useEffect , useState} from "react";
import { Route, Switch} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import RestaurantList from "./pages/RestaurantList"
import NewReservation from "./pages/NewReservation"
import NavBar from "./components/NavBar"
import ReservationEditForm from "./components/ReservationEditForm"

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const [newR, setNewR] = useState([])

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

  console.log(currentUser)

  function handle_EditReservation(r){
    history.push(`/edit_reservation/`)
    setNewR(r)
}

  return (
      <div>
        {!loggedIn ? (
            <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
        ) : (
          <>
            <h1>Reservation App</h1>
            <NavBar setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
            <Switch>

              <Route path="/edit_reservation/">
                <ReservationEditForm currentUser={currentUser} setCurrentUser={setCurrentUser} newR={newR}/>
              </Route>

              <Route path="/new">
                <NewReservation currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              </Route>

              <Route path="/restaurants">
                <RestaurantList/>
              </Route>
            
              <Route path="/">
                <HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} handle_EditReservation={handle_EditReservation}/>
              </Route>

            </Switch>
          </>
        )}  
      </div>
  );
}

export default App;
