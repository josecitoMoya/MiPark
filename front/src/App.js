import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import List from "./components/List";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./redux/user";
import Navbar2 from "./components/Navbar2";
import Park from "./components/Park";
import NotFound from "./components/NotFound";
import Anfitrion from "./components/Anfitrion";
import Content from "./components/Content";
import Reserva from "./components/Reserva";

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

  const park = useSelector((state) => state.reserva);

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
          <Route path={`/reservation/:id`} element={<Reserva />} />
          <Route path={`/park/:id`} element={<Park />} />
          <Route path="/anfitrion" element={<Anfitrion />} />
          <Route path="/huesped" element={<Content />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
