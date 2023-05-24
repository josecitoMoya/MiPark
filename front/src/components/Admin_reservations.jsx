import { Flex, Stack, Text, Wrap } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AdminCards from "../commons/Admin_cards";
import AdminReservationsCards from "../commons/Admin_reservation_cards";

const AdminReservations = () => {
  const location = useLocation();

  const user = useSelector((state) => state.user);

  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/reserves/adminallreserves")
      .then((res) => setReserves(res.data.data))
      .then((res) =>
        console.log("ESTO LLEGA AL PEDIR LAS RESERVAS", res.data.data)
      )
      .catch((err) => console.log(err));
  }, []);

  return reserves ? (
    <Stack marginLeft={"10%"}>
      {reserves?.map((data, i) => (
        <Wrap key={i} w={"70%"} p={4}>
          <AdminReservationsCards data={data} key={data.id} />
        </Wrap>
      ))}
    </Stack>
  ) : (
    <Stack marginTop={"15%"}>
      <Text fontSize="6xl">No hay cocheras pendientes de autorizacion.</Text>
    </Stack>
  );
};

export default AdminReservations;
