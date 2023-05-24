import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AdminCards from "../commons/Admin_cards";
import { StarIcon } from "@chakra-ui/icons";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const [parkings, setParkings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/parkings/search/all-parkings")
      .then((res) => res.data.data)
      .then((res) => setParkings(res));

    axios
      .get("http://localhost:8080/api/admin//users/search/all-users")
      .then((res) => res.data.data)
      .then((res) => setUsers(res));
  }, []);

  const authorizedParks = parkings.reduce((counter, parks) => {
    if (parks.authorized === false) {
      return counter + 1;
    } else {
      return counter;
    }
  }, 0);

  return (
    <Box maxW={"80%"} mt={"10%"}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://www.espacioyconfort.com.ar/images/stories/gba_revista95/arquitectura/arquitectura2/galeria/garage-privado-quilmes04.JPG"
          alt="Caffe Latte"
        />

        <Stack minH={"250px"}>
          <CardBody ml={"100px"}>
            <Stack spacing="4">
              <Box>
                <Heading size="lg" textTransform="uppercase">
                  Cantidad de cocheras en base de datos
                </Heading>
                <Text pt="2" fontSize="xl">
                  {parkings.length}
                </Text>
              </Box>
              <br />
              <Box>
                <Heading size="lg" textTransform="uppercase">
                  Cocheras pendientes de autorizacion
                </Heading>
                <Text pt="2" fontSize="xl">
                  {authorizedParks}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
      <br />
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sR3wrSnzRihphYhphRmPstfSQlR90Bbn0A&usqp=CAU"
          alt="Caffe Latte"
        />

        <Stack minH={"250px"}>
          <CardBody ml={"100px"}>
            <Center>
              <Stack spacing="4">
                <Center>
                  <Box>
                    <Heading size="lg" textTransform="uppercase">
                      Cantidad de usuarios registrados
                    </Heading>
                    <Text pt="2" fontSize="xl">
                      {users.length}
                    </Text>
                  </Box>
                </Center>
              </Stack>
            </Center>
          </CardBody>
        </Stack>
      </Card>
      <br />
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://www.argentina.gob.ar/sites/default/files/garage_12.jpg"
          alt="Caffe Latte"
        />

        <Stack minH={"250px"}>
          <CardBody>
            <Center>
              <Stack spacing="4">
                <Center justifyContent={"center"}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Cantiad de reservas registradas
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {users.length}
                    </Text>
                  </Box>
                </Center>
              </Stack>
            </Center>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};

export default Admin;
