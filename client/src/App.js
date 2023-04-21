import { useEffect } from "react";
import Login from "./pages/Login"
import HomePage from "./pages/HomePage"
import RestaurantList from "./pages/RestaurantList"
import NewReservation from "./pages/NewReservation"

function App() {


  return (
    
    <>
    <h1>Reservation App</h1>
    <Login/>
    {/* 
    <HomePage/> 
    <RestaurantList/>
    
    <NewReservation/>
    */}
    </>
  )
}

export default App;
