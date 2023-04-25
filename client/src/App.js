import { useEffect , useState} from "react";
import { Route, Switch} from "react-router-dom"
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import RestaurantList from "./pages/RestaurantList"
import NewReservation from "./pages/NewReservation"
import NavBar from "./components/NavBar"

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setCurrentUser(data);
          setLoggedIn(true)});
    }});
  }, [setCurrentUser]);

  return (
      <div>
        {!loggedIn ? (
            <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
        ) : (
          <>
            <h1>Reservation App</h1>
            <NavBar setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
            <Switch>

              <Route path="/new">
                <NewReservation currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              </Route>

              <Route path="/restaurants">
                <RestaurantList/>
              </Route>

              <Route path="/">
                <HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
              </Route>

            </Switch>
          </>
        )}  
      </div>
  );
}

export default App;
