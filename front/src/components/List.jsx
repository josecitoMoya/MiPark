import React, { useEffect, useState } from "react";
import {
  Wrap,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { Link, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addreserva } from "../redux/reserva";

const List = () => {
  const dispatch = useDispatch();

  /* codear el UseEffect */

  let park = [
    {
      id: 1,
      provincia: "Salta",
      ciduad: "Salta",
      ubicacion: "Buenos Aires 1287",
    },
    {
      id: 2,
      provincia: "Corrientes",
      ciduad: "Corrientes",
      ubicacion: "Roque Saenz Peña1287",
    },
    {
      id: 3,
      provincia: "Buenos Aires",
      ciduad: "Mar del Plata",
      ubicacion: "Hipolito Irigoyen 350",
    },
    {
      id: 4,
      provincia: "Entre Rios",
      ciduad: "Parana",
      ubicacion: "25 de Mayo 840",
    },
    {
      id: 5,
      provincia: "Mendoza",
      ciduad: "Mendoza",
      ubicacion: "Buenos Aires 1287",
    },
    {
      id: 6,
      provincia: "Buenos Aires",
      ciduad: "Mar del Plata",
      ubicacion: "Hipolito Irigoyen 350",
    },
    {
      id: 7,
      provincia: "Entre Rios",
      ciduad: "Parana",
      ubicacion: "25 de Mayo 840",
    },
    {
      id: 8,
      provincia: "Mendoza",
      ciduad: "Mendoza",
      ubicacion: "Buenos Aires 1287",
    },
  ];

  const handleDetail = (e) => {
    setLista([e]);
  };

  const handleReserva = (e) => {
    //  console.log(e);
    const { id } = e;
    dispatch(addreserva(id));
  };

  const [lista, setLista] = useState(park);
  const [reserva, setReserva] = useState({});

  useEffect(() => {
    console.log(lista);
  }, [lista]);

  return (
    <div>
      <h1>Soy un List</h1>
      <Wrap>
        {lista.map((park) => {
          return (
            <Card maxW="md" key={park.id}>
              <CardBody>
                <Image
                  onClick={() => handleDetail(park)}
                  src="https://enciclopedia.net/anexo/Estacionamiento.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"

                  //  width={{ xl: 300 }}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Park reservation</Heading>
                  <div>
                    <li>Provincia :{park.provincia}</li>
                    <li>ciudad : {park.ciudad}</li>
                    <li>ubicacion : {park.ubicacion}</li>
                  </div>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link to="/reservation">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => handleReserva(park)}
                    >
                      Reserve now
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => handleDetail(park)}
                  >
                    Details
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Wrap>
    </div>
  );
};

export default List;
