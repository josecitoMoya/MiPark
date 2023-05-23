import { Button, Stack, Text, Wrap } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminCards from "../commons/Admin_cards";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const [authorized, setAuthorized] = useState([]);

  console.log("SOY USER EN ADMIN", user);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/admin/parkings/search/all-pending-parkings"
      )
      .then((res) => res.data.data)
      .then((res) => setAuthorized(res));
  }, []);

  console.log("SOY AUTHORIZED", authorized);

  return authorized ? (
    <Stack>
      {authorized?.map((data) => (
        <Wrap w={"70%"} p={4} ml={"12%"}>
          <Link>
            <AdminCards data={data} key={data.id} />
          </Link>
        </Wrap>
      ))}
    </Stack>
  ) : (
    <Stack marginTop={"15%"}>
      <Text fontSize="6xl">No hay cocheras pendientes de autorizacion.</Text>
    </Stack>
  );
};

export default Admin;
