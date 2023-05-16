import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import List from "./components/List";
import Reserva from "./components/Reserva";
import axios from "axios";
import {useEffect } from "react";
import Sidebar from "./components/Sidebar";


function App() {
  //persistencia;
 
  const user = useContext(AuthContext);

  useEffect(() => {
    console.log("SOY LO QUYE VOY A MANDAR DESDE APP DEL FRONT", user);
    axios
      .get("http://localhost:8080/api/user/persist")
      .then((res) => user.logUser(res.data));
  }, []);

  return (
    <div className="App">
      <Navbar />

    <Sidebar />
      
    <Routes>
        <Route path="/list" element={<List />}></Route>
         <Route path="/" element={<h1>Soy el HOME</h1>} /> 
         <Route path="/" element={<List />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservation" element={<Reserva />} />

          </Routes>
     
</div>
  );
}

export default App;

           
      
           
           
           
          
