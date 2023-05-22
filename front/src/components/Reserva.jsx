import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios, { Axios } from "axios";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import {
  Card,
  ListIcon,
  ListItem,
  List,
  CardBody,
  CardFooter,
  Checkbox,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Reserva = () => {
  const id = useParams().id;
  const [park, setPark] = useState({});
  const [hour_f, setHour_f] = useState();
  const [hour_to, setHour_to] = useState();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const listHour = [];
  let hours = [];

  async function getParks() {
    const search = await fetch(
      `http://localhost:8080/api/parkings/search/${id}`
    );
    const result = await search.json();
    setPark(result.data);
    console.log(result.data);
    setHour_f(parseInt(result.data.from_hour));
    setHour_to(parseInt(result.data.to_hour));
  }

  useEffect(() => {
    getParks();
  }, []);

  const handleHour = (e) => {
    if (e.target.checked === true) {
      hours.push(parseInt(e.target.id));
    } else {
      const posicion = hours.filter((el) => el !== parseInt(e.target.id));
      hours = posicion;
    }
    hours.sort(compareNum);
    console.log(hours);
  };

  const compareNum = (a, b) => a - b;

  for (let i = hour_f; i <= hour_to; i++) {
    listHour.push(
      <Checkbox size="md" colorScheme="green" id={i} onChange={handleHour}>
        {i}:00 Horas
      </Checkbox>
    );
  }

  const handleAddCarrito = () => {
    const date = new Date().toLocaleDateString();

    const newReserve = {
      date: date,
      hours: hours,
      price: park.price_per_hour,
      parkingId: park.id,
      clientId: user.id,
    };
    axios
      .post("http://localhost:8080/api/reserves/add-reserve", newReserve)
      .then(({ data }) =>
        navigate(`/reserves/${user.firstName}-${user.lastName}/${user.id}`)
      );
  };

  return (
    <div>
      <Text fontSize="5xl" mt="4">
        Park Details{" "}
      </Text>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        borderRadius="lg"
        mt="4"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "500%", sm: "500px" }}
          src={park.image}
          alt="Caffe Latte"
        />

        <Stack>
          <Flex color="white">
            <Center h="400px" w="800px" textColor={"black"}>
              <CardBody w="600px">
                <Heading size="md">Details of the Park</Heading>
                <Text py="2"></Text>

                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Province : {park.province}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    City : {park.city}
                  </ListItem>

                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Zone: {park.zone}
                  </ListItem>

                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Roof : {park.roof ? "Yes" : "Not"}
                  </ListItem>

                  <ListItem>
                    <ListIcon as={MdSettings} color="green.500" />
                    Open : {park.from_hour}hs to : {park.to_hour}hs
                  </ListItem>
                </List>
              </CardBody>

              <CardBody w="200px">
                <Stack spacing={1} direction="column">
                  {listHour}
                </Stack>
              </CardBody>
            </Center>
          </Flex>

          <CardFooter>
            {user.id ? (
              <Button colorScheme="orange" onClick={handleAddCarrito}>
                Pagar
              </Button>
            ) : (
              ""
            )}
          </CardFooter>
        </Stack>
      </Card>

      <Link to="/">
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal" variant="outline" size="md">
            Back
          </Button>
        </Stack>
      </Link>
    </div>
  );
};

export default Reserva;
