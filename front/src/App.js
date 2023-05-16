import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import List from "./components/List";
import Reserva from "./components/Reserva";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/list" element={<List />}></Route>
        {/* <Route path="/" element={<h1>Soy el HOME</h1>} /> */}
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservation" element={<Reserva />} />
      </Routes>
    </div>
  );
}

export default App;
