import { Button, Stack, Text, Wrap } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AdminCards from "../commons/Admin_cards";

const AdminParks = () => {
  const location = useLocation();

  const user = useSelector((state) => state.user);

  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/parkings/search/all-parkings")
      .then((res) => res.data)
      .then((res) => setParkings(res.data));
  }, []);

  return parkings ? (
    <Stack marginLeft={"10%"}>
      {parkings?.map((data, i) => (
        <Wrap key={i} w={"70%"} p={4}>
          <Link>
            <AdminCards data={data} location={location} key={data.id} />
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

export default AdminParks;
