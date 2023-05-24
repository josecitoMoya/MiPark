import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const { admin, firstName } = useSelector((state) => state.user);

  return (
    <Box
      w="100%"
      h="100%"
      p={8}
      style={{
        background: "linear-gradient(0.51deg, #808080 8.46%, #ADD8E6 99.63%)",
      }}
    >
      {admin ? (
        <Stack>
          <Link to={"admin/users"}>
            <Button w={"100%"}>Usuarios</Button>
          </Link>
          <Link to={"/admin/parkings"}>
            <Button w={"100%"}>Cocheras</Button>
          </Link>
          <Link to={`/admin/reserves`}>
            <Button w={"100%"}>Reservas</Button>
          </Link>
        </Stack>
      ) : (
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "lightgrey" }}>
                <Box as="span" flex="1" textAlign="center">
                  Quiero ser anfitrion
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={"justify"} alignItems={"center"}>
              Ser anfitrión de una cochera implica ofrecer un espacio seguro y
              cerrado para que los huéspedes alquilen y guarden sus vehículos. A
              cambio de este servicio, recibirás una tarifa por el alquiler.
              Como anfitrión, es importante brindar un entorno confiable,
              mantener la cochera en buen estado.
              <br />
              <br />
              {firstName ? (
                <Stack flex={1} spacing={1} alignItems={"center"} w={"100%"}>
                  <Link to={"/anfitrion"}>
                    <Button p={4}>Quiero alquilar mi cochera</Button>
                  </Link>
                </Stack>
              ) : (
                <Stack flex={1} spacing={1} alignItems={"center"}>
                  <Link to={"/login"}>
                    <Button p={4}>Quiero alquilar mi cochera</Button>
                  </Link>
                </Stack>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "lightgrey" }}>
                <Box as="span" flex="1" textAlign="center">
                  Quiero ser huesped
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign={"justify"}>
              Como huésped, pagas una tarifa por el alquiler de la cochera, lo
              cual te brinda la tranquilidad de tener un lugar adecuado para
              estacionar tu vehículo, especialmente si no hay suficiente espacio
              de estacionamiento disponible en el lugar donde te hospedas o si
              buscas una opción más segura que dejar tu vehículo en la vía
              pública.
              <br />
              <br />
              {firstName ? (
                <Stack flex={1} spacing={1} alignItems={"center"} w={"100%"}>
                  <Link to={"/huesped"}>
                    <Button w={"100%"} p={4}>
                      Quiero alquilar una cochera
                    </Button>
                  </Link>
                </Stack>
              ) : (
                <Stack flex={1} spacing={1} alignItems={"center"}>
                  <Link to={"/login"}>
                    <Button w={"100%"} p={4}>
                      Quiero alquilar una cochera
                    </Button>
                  </Link>
                </Stack>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </Box>
  );
};

export default Sidebar;
