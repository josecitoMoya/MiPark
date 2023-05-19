import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import List from "./components/List";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/user";
import Navbar2 from "./components/Navbar2";
import Anfitrion from "./components/Anfitrion";
import Content from "./components/Content";
import UserParks from "./components/User_parks";

function App() {
  //Persistencia
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/me", { withCredentials: true })
      .then((res) => dispatch(addUser(res.data.data)))
      .catch((err) => console.log(err));
  }, []);
  //Fin de persisntencia

  return (
    <div className="App">
      <Navbar2 />
      <br />
      <Sidebar />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: "20%" }}>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/anfitrion" element={<Anfitrion />} />
          <Route path="/huesped" element={<Content />} />
          <Route path="/user" element={<UserParks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
