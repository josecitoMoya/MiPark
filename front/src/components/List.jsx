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
  Button,
} from "@chakra-ui/react";

import { Link, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addreserva } from "../redux/reserva";
import Park from "./Park";

const List = () => {
  const dispatch = useDispatch();

  /* codear el UseEffect */

  let park = [
    {
      id: 1,
      provincia: "Salta",
      ciduad: "Salta",
      ubicacion: "Buenos Aires 1287",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 2,
      provincia: "Corrientes",
      ciduad: "Corrientes",
      ubicacion: "Roque Saenz Peña1287",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 3,
      provincia: "Buenos Aires",
      ciduad: "Mar del Plata",
      ubicacion: "Hipolito Irigoyen 350",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 4,
      provincia: "Entre Rios",
      ciduad: "Parana",
      ubicacion: "25 de Mayo 840",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 5,
      provincia: "Mendoza",
      ciduad: "Mendoza",
      ubicacion: "Buenos Aires 1287",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 6,
      provincia: "Buenos Aires",
      ciduad: "Mar del Plata",
      ubicacion: "Hipolito Irigoyen 350",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 7,
      provincia: "Entre Rios",
      ciduad: "Parana",
      ubicacion: "25 de Mayo 840",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
    {
      id: 8,
      provincia: "Mendoza",
      ciduad: "Mendoza",
      ubicacion: "Buenos Aires 1287",
      imagen: "https://enciclopedia.net/anexo/Estacionamiento.jpg",
    },
  ];

  const handleDetail = (e) => {
    SetVista(!vista);
    if (!vista) {
      console.log("unico");
      setLista([e]);
    } else {
      setLista(park);
      console.log("muchos");
    }
  };

  const handleReserva = (e) => {
    const { id, provincia, ciduad, ubicacion, imagen } = e;
    dispatch(addreserva({ id, provincia, ciduad, ubicacion, imagen }));
  };

  const [lista, setLista] = useState(park);
  const [vista, SetVista] = useState(false);

  useEffect(() => {
    dispatch(addreserva(park));
  }, []);

  return (
    <div>
      <Wrap>
        {lista.map((park) => {
          return (
            <Card maxW="md" key={park.id} bg="blue.100">
              <CardBody>
                <Image
                  onClick={() => handleReserva(park)}
                  src={park.imagen}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <br />

                <Link to={`/reservation/${park.id}`}>
                  <Button
                    variant="solid"
                    colorScheme="blue"

                    //                onClick={() => handleReserva(park)}
                  >
                    Reserve now
                  </Button>
                </Link>

                <Link to={`/park/${park.id}`}>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    //          onClick={() => handleReserva(park)}
                  >
                    Details
                  </Button>
                </Link>

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

              {vista ? (
                <Stack spacing={4} direction="row" align="center">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    size="md"
                    onClick={() => handleDetail(park)}
                  >
                    Back
                  </Button>
                </Stack>
              ) : (
                ""
              )}

              <Divider />
            </Card>
          );
        })}
      </Wrap>
    </div>
  );
};

export default List;
