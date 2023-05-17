import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Heading,
  Button,
  Center,
  Flex,
  Square,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Reserva = () => {
  const reserva = useSelector((state) => state.reserva);
  console.log("reserva", reserva);
  const itemHora = [];

  for (let i = 1; i < 12; i++) {
    itemHora.push(
      <li key={i}>
        <Checkbox key={i} id={{ reserva: reserva.id, hora: { i } }}>
          Hora : {i}
        </Checkbox>
      </li>
    );
  }

  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "500%", sm: "500px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <Flex color="white">
            <Center w="600px" h="400px" textColor={"black"}>
              <CardBody>
                <Heading size="md">The perfect latte</Heading>
                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                  <li>{reserva.id}</li>
                  <li>{reserva.ciduad}</li>
                  <li>{reserva.provincia}</li>
                  <li>{reserva.ubicacion}</li>
                </Text>
              </CardBody>
            </Center>

            <Square bg="blue.200" size="400px" h="400" textColor={"black"}>
              <ul>{itemHora}</ul>
            </Square>
          </Flex>

          <CardFooter>
            {/*  <Button variant="solid" colorScheme="blue">
              Agregar a Carrito
            </Button> */}
            <Button colorScheme="orange">Agregar a Carrito</Button>
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
