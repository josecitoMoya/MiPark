import axios from "axios";
import { Route, Routes } from "react-router";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthContext } from "./context/AuthContext";
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
        <Route
          path="/"
          element={
            <div
              style={{
                marginLeft: "256px",
                backgroundColor: "red",
                width: "75%",
              }}
            >
              <h1>Soy el HOME</h1>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
