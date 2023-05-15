import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./commons/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Soy el HOME</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
