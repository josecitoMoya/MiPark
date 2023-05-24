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
import UserReserves from "./components/UserReserves";
import Reserva from "./components/Reserva";
import UserParks from "./components/User_parks";
import Admin from "./components/Admin";
import AdminUser from "./components/AdminUsers";
import UserProfile from "./components/UserProfile";
import AdminParks from "./components/Admin_parks";
import { Flex, Grid, GridItem } from "@chakra-ui/layout";

function App() {
  const user = useSelector((state) => state.user);

  //Persistencia
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/me", { withCredentials: true })
      .then((res) => res.data)
      .then(({ message, data }) => {
        dispatch(addUser(data));
      })
      .catch((err) => console.log(err));
  }, []);
  //Fin de persisntencia

  const park = useSelector((state) => state.reserva);

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  `}
      gridTemplateRows={"120px 1fr "}
      gridTemplateColumns={"250px 1fr"}
      h="100vh"
      gap="0"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        <Navbar2 />
      </GridItem>
      <GridItem bg="pink.300" area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem
        area={"main"}
        backgroundImage="url(https://img.autosblogmexico.com/2019/10/18/27PgLqGM/estacionamiento-a353.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex justifyContent={"center"}>
          {user && user.admin ? (
            <Routes>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/parkings" element={<AdminParks />}></Route>
              <Route path="/admin/users" element={<AdminUser />}></Route>
              <Route path="/admin/reserves"></Route>
              <Route
                path="/admin/user/:userId"
                element={<UserProfile />}
              ></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path={`/reservation/:id`} element={<Reserva />} />
              <Route path={`/park/:id`} element={<Park />} />
              <Route path="/anfitrion" element={<Anfitrion />} />
              <Route path="/huesped" element={<Content />} />
              <Route
                path="/reserves/:username/:id"
                element={<UserReserves />}
              />
              <Route path="/user" element={<UserParks />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
