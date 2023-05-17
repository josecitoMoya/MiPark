import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import List from "./components/List";
import Reserva from "./components/Reserva";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  //persistencia;

  /*Linea de Jose 
   const user = useContext(AuthContext); */

  useEffect(() => {
    /*  liena de Jose
     console.log("SOY LO QUYE VOY A MANDAR DESDE APP DEL FRONT", user); */

    axios
      .get("http://localhost:8080/api/user/persist")
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: "15%" }}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservation" element={<Reserva />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
